import * as xml2js from 'xml2js';

import { getCname } from '$lib/Utils.server';
import { arrMax } from '$lib/Utils';
import type { Post, EmbedYoutube, EmbedSelf } from '$lib/Feed';

// Feed media is only published through Vite (hashed filenames), so resolve it
// the same way Post.svelte does rather than linking to /feeds/... paths.
const mediaImages = import.meta.glob(
    '/src/feeds/**/*.{png,jpg,jpeg,webp}',
    { query: '?as=post', import: 'default', eager: true }
) as Record<string, { img: { src: string } }>;

const mediaOther = import.meta.glob(
    '/src/feeds/**/*.{gif,svg,mp4,webm}',
    { query: '?url', import: 'default', eager: true }
) as Record<string, string>;

export function escapeHtml(str: string): string {
    return str
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');
}

// xml2js writes undefined values as empty elements, so drop them first
function withoutUndefined<T extends object>(obj: T): Partial<T> {
    return Object.fromEntries(
        Object.entries(obj).filter(([, value]) => value !== undefined)
    ) as Partial<T>;
}

export interface RssItem {
    title?: string;
    link: string; // Absolute
    html: string;
    date?: string; // Anything Date can parse
    updated?: string;
}

export interface RssChannel {
    title: string;
    link: string; // Absolute
    description: string;
    self: string; // Absolute URL of the feed itself
    items: RssItem[];
}

export function getOrigin(): string {
    return `https://${getCname().trim()}`;
}

export function absoluteUrl(url: string): string {
    return new URL(url, getOrigin()).href;
}

// Feed readers have no base URL to resolve root-relative links against
function absolutizeHtml(html: string): string {
    return html.replace(
        /(\s(?:href|src)=")(\/[^"]*)"/g,
        (_, attr, url) => `${attr}${absoluteUrl(url)}"`
    );
}

function mediaHtml(post: Post): string {
    return post.media.map(media => {
        const key = `/src/feeds/${post.feed.id}/${post.id}/${media.id}${media.extension.toLowerCase()}`;
        const image = mediaImages[key]?.img.src;
        if (image) return `<p><img src="${image}" alt=""></p>`;
        const other = mediaOther[key];
        if (other?.match(/\.(mp4|webm)$/)) {
            return `<p><video src="${other}" controls></video></p>`;
        }
        if (other) return `<p><img src="${other}" alt=""></p>`;
        return `<p><a href="${escapeHtml(media.urlGitHub)}">${escapeHtml(media.id + media.extension)}</a></p>`;
    }).join('\n');
}

function embedsHtml(post: Post): string {
    return post.embeds.map(embed => {
        if (embed.platform == "youtube") {
            const url = `https://www.youtube.com/watch?v=${(embed as EmbedYoutube).id}`;
            return `<p><a href="${url}">${url}</a></p>`;
        }
        const embedded = (embed as EmbedSelf).post;
        return `<blockquote>${postHtml(embedded)}<p><a href="${embedded.url}">${escapeHtml(embedded.fm.urlShort)}</a></p></blockquote>`;
    }).join('\n');
}

function postHtml(post: Post): string {
    return [post.html, mediaHtml(post), embedsHtml(post)]
        .filter(x => x.trim())
        .join('\n');
}

export function postToRssItem(post: Post): RssItem {
    return {
        title: post.fm.title,
        link: absoluteUrl(post.url + "/"), // Site uses trailingSlash: 'always'
        html: absolutizeHtml(postHtml(post)),
        date: post.fm.date,
        updated: post.fm.last_modified_at
    };
}

function isValidDate(date: Date) {
    return !isNaN(date.getTime());
}

function toDate(str: string | undefined): Date | undefined {
    if (!str) return undefined;
    const date = new Date(str);
    return isValidDate(date) ? date : undefined;
}

export function buildRss(channel: RssChannel): string {
    const items = channel.items.map(item => ({ ...item, date: toDate(item.date) }));
    items.sort((a, b) => (b.date?.getTime() || 0) - (a.date?.getTime() || 0));

    const allDates = channel.items
        .flatMap(item => [toDate(item.date), toDate(item.updated)])
        .filter(x => x) as Date[];

    const rss = {
        rss: {
            $: {
                version: "2.0",
                "xmlns:atom": "http://www.w3.org/2005/Atom"
            },
            channel: withoutUndefined({
                title: channel.title,
                link: channel.link,
                description: channel.description,
                language: "en-us",
                pubDate: items[0]?.date?.toUTCString(),
                lastBuildDate: arrMax(allDates)?.toUTCString(),
                docs: "https://www.rssboard.org/rss-specification",
                "atom:link": {
                    $: {
                        href: channel.self,
                        rel: "self",
                        type: "application/rss+xml"
                    }
                },
                item: items.map(item => withoutUndefined({
                    title: item.title || undefined,
                    link: item.link,
                    description: item.html,
                    pubDate: item.date?.toUTCString(),
                    guid: item.link
                }))
            })
        }
    };

    return new xml2js.Builder().buildObject(rss);
}

export function rssResponse(xml: string): Response {
    return new Response(xml, {
        headers: { "Content-Type": "application/rss+xml; charset=utf-8" }
    });
}
