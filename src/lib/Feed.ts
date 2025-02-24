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
	getLatestCommitDate,
	getFirstCommitDate,
    getFirstAndLatestCommitDates
} from '$lib/Git.server';
import path from 'path';

const feedsDir = 'src/feeds';

async function getPostedDate(path: string) {
    return (
        await getFirstCommitDate(path)
        || getFileCreatedDate(path)
    );
}

async function getEditedDate(path: string) {
    return (
        await getLatestCommitDate(path)
        || getFileModifiedDate(path)
    );
}

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
    platform: "youtube";
    id: string;
    originalUrl: string;
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
        const mediaPath = path.join(mediaRoot, mediaFileName);
        let [id, extension] = splitext(mediaFileName);
        extension = extension.toLowerCase();
        
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

export function getFeedPostEmbeds(postContents: string) {
    const regexYoutube = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?\S*(?:\s|$)/g;
    const matches = postContents.matchAll(regexYoutube).toArray();
    
    // Remove all embeds from the contents
    let filteredPostContents = postContents;
    const embeds = matches.map(match => {
        const embed = {
            platform: "youtube",
            id: match[1],
            originalUrl: match[0]
        } as Embed;
        filteredPostContents = filteredPostContents.replaceAll(
            embed.originalUrl,
            ""
        );
        return embed
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
    
    const {filteredPostContents, embeds} = getFeedPostEmbeds(postContents);
    
    const compiled = await compile(filteredPostContents, {
        smartypants: false,
    });
    
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
    
    let htmlShort = html;
    let htmlNeedsShortening = htmlShort.length > 350;
    if (htmlNeedsShortening) {
        htmlShort = splitHtmlAt(htmlShort, 300);
        if (html.length <= htmlShort.length) {
            htmlNeedsShortening = false;
            htmlShort = html;
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