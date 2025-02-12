export const prerender = true;

import * as xml2js from 'xml2js';
import type { RequestHandler } from "@sveltejs/kit";

import { getFeed, getFeedIds, type Feed } from '$lib/Feed.js';
import { arrMax, arrMin } from '$lib/Utils.js';

function isValid(x: any) {
    return !isNaN(x);
}

function rssObj(feed: Feed, originUrl: string) {
    const postDates = feed.posts?.map(x => x.fm.date).filter(x => x) || [];
    const editDates = feed.posts?.map(x => x.fm.last_modified_at).filter(x => x) || [];
    console.log(postDates);
    console.log(editDates);
    const lastBuildDatePost = arrMax(postDates.map(x => new Date(x)));
    const lastBuildDateEdit = arrMax(editDates.map(x => new Date(x)));
    
    const lastBuildDate = (
        isValid(lastBuildDateEdit)
        ? lastBuildDateEdit
        : lastBuildDatePost
    );
        
    return {
        rss: {
            $: {
                "xmlns:atom": "http://www.w3.org/2005/Atom",
                version: "2.0",
                "ml-update": "aware",
                "ml-stage": "preload",
                "ml-view": "top"
            },
            channel: {
                title: feed.meta.title,
                link: new URL(feed.url, originUrl).href,
                description: feed.meta.description,
                language: "en-us",
                pubDate: arrMin(
                    feed.posts?.map(
                        x => new Date(x.fm.date)
                    )
                )?.toUTCString(),
                lastBuildDate: lastBuildDate?.toUTCString(),
                docs: "https://www.rssboard.org/rss-specification",
                generator: "me :^)",
                managingEditor: "joe@jojudge.com (Joseph Judge)",
                webMaster: "joe@jojudge.com (Joseph Judge)",
                "atom:link": {
                    $: {
                        href: new URL(feed.rss, originUrl).href, // new URL is not working here
                        rel: "self",
                        type: "application/rss+xml"
                    }
                },
                item: feed.posts?.map(post => ({
                    title: post.fm.title,
                    link: new URL(post.url, originUrl).href,
                    description: post.html.trim(),
                    pubDate: new Date(post.fm.date).toUTCString(),
                    guid: post.url
                }))
            }
        }
    }
}

export const GET: RequestHandler = async ({ url }: { url: URL }) => {
    const regex = new RegExp("\/feeds\/(.*?)\/feed.rss");
    const match = url.toString().match(regex);
    if (!match) return new Response();
    const feedId = match[1];
    const feed = await getFeed(feedId, true);
    
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(rssObj(feed, url.origin));
    return new Response(xml);
}

export async function entries() {
    return getFeedIds().map((feedId: string) => ({ feed: feedId }));
}