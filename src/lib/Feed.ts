import fs from 'fs';
import { compile } from 'mdsvex';
import * as yaml from 'yaml';
import {
    splitext,
    arrMax,
    arrMin,
    splitHtmlAt
} from '$lib/Utils';

import {
    getFileCreatedDate,
    getFileModifiedDate,
    githubLink,
    getCname
} from '$lib/Utils.server'
import ExifReader from 'exifreader';

import {
    getFirstAndLatestCommitDates
} from '$lib/Git.server';
import path from 'path';
import { highlightCode } from "$lib/JSUtils.js";

const feedsDir = 'src/feeds';

interface PostedAndEditedDate {
    posted: string | undefined;
    edited: string | undefined;
}

async function getPostedAndEditedDate(path: string) {
    let { first, latest } = await getFirstAndLatestCommitDates(path);
    first = first || await getFileCreatedDate(path);
    latest = latest || getFileModifiedDate(path);
    return {
        posted: first,
        edited: latest
    } as PostedAndEditedDate;
}

function strToDate(str: string | undefined): Date {
    let date = new Date(str || "");
    date.setSeconds(0, 0);
    return date;
}

export function getFeedIds(): string[] {
    const feedIds = fs.readdirSync(feedsDir, { withFileTypes: true })
        .filter((dirent: fs.Dirent) => dirent.isDirectory())
        .map((dirent: fs.Dirent) => dirent.name);
    return feedIds;
}

export interface Embed {
    platform: "youtube" | "self";
    originalUrl: string;
}

export interface EmbedYoutube extends Embed {
    platform: "youtube";
    id: string;
}

export interface EmbedSelf extends Embed {
    platform: "self";
    post: Post;
}

export interface Media {
    id: string;
    extension: string;
    url: string;
    date: string;
    lastModifiedDate: string;
    urlGitHub: string;
    exif?: ExifReader.Tags;
}

export interface Post {
    id: string;
    html: string;
    htmlShort: string;
    media: Media[];
    embeds: Embed[];
    fm: Record<string, any>;
    idFull: string;
    url: string;
    feed: Feed;
    raw: string;
}

export interface Feed {
    id: string;
    meta: Record<string, any>;
    url: string;
    rss: string;
    urlShort: string;
    posts?: Post[]
}

export async function getFeedPostMedia(feedId: string, postId: string): Promise<Media[]> {
    const mediaRoot = path.join(feedsDir, feedId, postId);
    
    const mediaFileNames = (
        fs.readdirSync(mediaRoot, { withFileTypes: true })
            .filter((dirent: fs.Dirent) => !dirent.isDirectory())
            .map((dirent: fs.Dirent) => dirent.name)
            .filter((name: string) => name !== 'post.md')
    );
    
    const media = await Promise.all(mediaFileNames.map(async (mediaFileName: string) => {
        let mediaPath = path.join(mediaRoot, mediaFileName);
        let [id, extension] = splitext(mediaFileName);
        const extensionBeforeLower = extension;
        extension = extension.toLowerCase();
        
        // If the extension is uppercase, convert it to lowercase
        if (extensionBeforeLower !== extension) {
            fs.renameSync(mediaPath, path.join(mediaRoot, `${id}${extension}`));
            mediaPath = path.join(mediaRoot, `${id}${extension}`);
            extension = extensionBeforeLower;
        }
        
        const exifExtensions = [
            ".jpg",
            ".jpeg",
            ".png",
            ".heic",
            ".heif",
            ".avif",
            ".webp",
            ".gif"
        ];
        
        let exif = undefined;
        
        if (exifExtensions.includes(extension)) {
            try {
                exif = await ExifReader.load(mediaPath);
            } catch (e) { }
        }
        
        const { posted, edited } = await getPostedAndEditedDate(mediaPath);
        
        return {
            id,
            extension,
            date: posted,
            lastModifiedDate: edited,
            url: `/feeds/${feedId}/${postId}/${mediaFileName}`,
            urlGitHub: await githubLink(path.join(feedsDir, feedId, postId, mediaFileName)),
            exif: exif
        } as Media;
    }));
    
    return media;
}

export async function getFeedPostEmbedsSelf(postContents: string) {
    const regexSelf = new RegExp(`(?:https?:\/\/)?${getCname()}\/feeds\/([^\/]+)\/([^\/]+)\/?`, 'g');
    const matches = postContents.matchAll(regexSelf).toArray();
    
    // Remove all embeds from the contents
    let filteredPostContents = postContents;
    const embeds = await Promise.all(matches.map(async match => {
        const feedId = match[1];
        const feed = await getFeed(feedId, false);
        const postId = match[2];
        const post = await getFeedPost(feed, postId);
        const embed = {
            platform: "self",
            post,
            originalUrl: match[0]
        } as EmbedSelf;
        filteredPostContents = filteredPostContents.replaceAll(
            embed.originalUrl,
            ""
        );
        return embed as Embed;
    }));
    
    filteredPostContents = filteredPostContents.trim();
    
    return {
        filteredPostContents,
        embeds
    };
}

export async function getFeedPostEmbedsYoutube(postContents: string) {
    const regexYoutube = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?\S*(?:\s|$)/g;
    const matches = postContents.matchAll(regexYoutube).toArray();
    
    // Remove all embeds from the contents
    let filteredPostContents = postContents;
    const embeds = matches.map(match => {
        const embed = {
            platform: "youtube",
            id: match[1],
            originalUrl: match[0]
        } as EmbedYoutube;
        filteredPostContents = filteredPostContents.replaceAll(
            embed.originalUrl,
            ""
        );
        return embed as Embed;
    });
    
    filteredPostContents = filteredPostContents.trim();
    
    return {
        filteredPostContents,
        embeds
    };
}

export async function getFeedPost(feed: Feed, postId: string): Promise<Post> {
    const media = await getFeedPostMedia(feed.id, postId);
    
    let postContents = "";
    
    const postPath = path.join(feedsDir, feed.id, postId, "post.md");
    try {
        postContents = fs.readFileSync(postPath, 'utf-8');
    } catch { }
    
    let filteredPostContents = postContents;
    let embedsYoutube: Embed[];
    ({
        filteredPostContents,
        embeds: embedsYoutube
    } = await getFeedPostEmbedsYoutube(filteredPostContents));
    
    let embedsSelf: Embed[];
    ({
        filteredPostContents,
        embeds: embedsSelf
    } = await getFeedPostEmbedsSelf(filteredPostContents));
    
    let embeds = embedsYoutube.concat(embedsSelf);
    
    const compiled = await compile(
        filteredPostContents,
        {
            smartypants: false,
            layout: "./src/lib/MdsvexLayout.svelte",
			highlight: {
				highlighter: highlightCode
			},
        }
    );
    
    // https://github.com/pngwn/MDsveX/issues/392#issuecomment-1013755667
    const html = (
        compiled?.code
            .replace(/>{@html `<code class="language-/g, '><code class="language-')
            .replace(/<\/code>`}<\/pre>/g, '</code></pre>')
        || ''
    );
    
    const fm = (compiled?.data?.fm || {}) as Record<string, any>;
    fm.urlShort = `${getCname()}/feeds/${feed.id}/${postId}`;
    
    const fmHasDate = Object.hasOwn(fm, 'date');
    const fmHasLastModifiedAt = Object.hasOwn(fm, 'last_modified_at');
    
    let posted: string | undefined = undefined;
    let edited: string | undefined = undefined;
    
    if (!fmHasDate || !fmHasLastModifiedAt) {
        ({ posted, edited } = await getPostedAndEditedDate(postPath));
    }
    
    if (!fmHasDate) {
        const mediaDates = media.map(x => x.date);
        const dates = [...mediaDates, posted].filter(x => x); // Remove undefined
        if (dates.length) {
            fm.date = arrMin(
                dates.map(strToDate)
            )?.toISOString();
        }
    }
    
    if (!fmHasLastModifiedAt) {
        const mediaDates = media.map(x => x.lastModifiedDate);
        const dates = [...mediaDates, edited].filter(x => x); // Remove undefined
        if (dates.length) {
            fm.last_modified_at = arrMax(
                dates.map(strToDate)
            )?.toISOString();
        }
                
        if (fm.last_modified_at === fm.date) {
            delete fm.last_modified_at;
        }
    }
    
    let htmlShort = html.trim();
    
    // If htmlShort begins with a script tag, remove it
    if (htmlShort.startsWith('<script')) {
        const endTagIndex = htmlShort.indexOf('</script>') + 9;
        htmlShort = htmlShort.substring(endTagIndex).trim();
    }
    
    if (htmlShort.length > 350) {
        const htmlShortOriginal = htmlShort;
        htmlShort = splitHtmlAt(htmlShort, 300);
        if (htmlShortOriginal.length <= htmlShort.length) {
            htmlShort = htmlShortOriginal;
        }
    }
    
    return {
        id: postId,
        html,
        htmlShort,
        raw: postContents,
        embeds,
        media,
        fm,
        idFull: `${feed.id}/${postId}`,
        url: `/feeds/${feed.id}/${postId}`,
        feed
    } as Post
}

export function getFeedPostIds(feedId: string): string[] {
    const postDirents = (
        fs.readdirSync(
            path.join(feedsDir, feedId),
            { withFileTypes: true }
        ).filter((dirent: fs.Dirent) => dirent.isDirectory())
    );

    return postDirents.map((postDirent: fs.Dirent) => postDirent.name);
}

export function sortPosts(posts: Post[]) {
    // First sort by date
    posts.sort((a: Post, b: Post) => {
        const dateA = new Date(a.fm.date || 0).getTime();
        const dateB = new Date(b.fm.date || 0).getTime();
        return dateB - dateA;
    });
    // Then sort by whether they're pinned
    posts.sort((a: Post, b: Post) => {
        const pinnedA = a.fm.pinned || false;
        const pinnedB = b.fm.pinned || false;
        return pinnedB - pinnedA;
    });
}

export async function getFeedPosts(feed: Feed): Promise<Post[]> {
    const postIds = getFeedPostIds(feed.id);
    
    const posts = await Promise.all(
        postIds.map(
            async (postId: string) => await getFeedPost(feed, postId)
        )
    );
    
    sortPosts(posts);
    
    return posts;
}

export async function getFeed(feedId: string, includePosts = false): Promise<Feed> {
    const feedMeta = yaml.parse(
        fs.readFileSync(
            path.join(feedsDir, feedId, "meta.yaml"),
            'utf8'
        )
    );
    
    let feed = {
        id: feedId,
        meta: feedMeta,
        url: `/feeds/${feedId}`,
        rss: `/feeds/${feedId}/feed.rss`,
        urlShort: `${getCname()}/feeds/${feedId}`,
        posts: undefined
    } as Feed;
    
    if (includePosts) feed.posts = await getFeedPosts(feed);
    
    return feed;
}

export async function getAllFeeds(includePosts = false): Promise<Feed[]> {
    const feeds = await Promise.all(getFeedIds().map(
        (feedId: string) => getFeed(feedId, includePosts))
    );
    feeds.sort((a: Feed, b: Feed) => {
        const orderA = a.meta.order || 0;
        const orderB = b.meta.order || 0;
        return orderB - orderA;
    });
    return feeds;
}