import fs from 'fs';
import { compile } from 'mdsvex';
import * as yaml from 'yaml';
import {
    githubLink,
    splitext,
    arrMax,
    arrMin
} from '$lib/Utils.js';
import ExifReader from 'exifreader';

import {
	getLatestCommitDate,
	getFirstCommitDate
} from '$lib/Git';
import path from 'path';

const feedsDir = 'src/feeds';

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
    media: Media[];
    embeds: Embed[];
    fm: Record<string, any>;
    idFull: string;
    url: string;
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
        
        return {
            id,
            extension,
            date: await getFirstCommitDate(mediaPath),
            lastModifiedDate: await getLatestCommitDate(mediaPath),
            url: `/feeds/${feedId}/${postId}/${mediaFileName}`,
            urlGitHub: githubLink(path.join(feedsDir, feedId, postId, mediaFileName)),
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

export async function getFeedPost(feedId: string, postId: string): Promise<Post> {
    const media = await getFeedPostMedia(feedId, postId);
    
    let postContents = "";
    
    const postPath = path.join(feedsDir, feedId, postId, "post.md");
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
    fm.urlShort = `jojudge.com/feeds/${feedId}/${postId}`;
    
    if (!Object.hasOwn(fm, 'date')) {
        const mediaDates = media.map(x => x.date);
        const postFileDate = await getFirstCommitDate(postPath);
        const dates = [...mediaDates, postFileDate].filter(x => x); // Remove undefined
        if (dates.length) {
            fm.date = arrMin(
                dates.map(
                    x => new Date(x?.toString() || "")
                )
            )?.toISOString();
        }
    }
    
    if (!Object.hasOwn(fm, 'last_modified_at')) {
        const mediaDates = media.map(x => x.lastModifiedDate);
        const postFileDate = await getLatestCommitDate(postPath);
        const dates = [...mediaDates, postFileDate].filter(x => x); // Remove undefined
        if (dates.length) {
            fm.last_modified_at = arrMax(
                dates.map(
                    x => new Date(x?.toString() || "")
                )
            )?.toISOString();
        }
        
        if (fm.last_modified_at === fm.date) {
            delete fm.last_modified_at;
        }
    }
    
    return {
        id: postId,
        html,
        embeds,
        media,
        fm,
        idFull: `${feedId}/${postId}`,
        url: `/feeds/${feedId}/${postId}`
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

export async function getFeedPosts(feedId: string): Promise<Post[]> {
    const postIds = getFeedPostIds(feedId);
    
    const posts = await Promise.all(
        postIds.map(
            async (postId: string) => await getFeedPost(feedId, postId)
        )
    );
    
    return posts;
}

export async function getFeed(feedId: string, includePosts = false): Promise<Feed> {
    const feedMeta = yaml.parse(
        fs.readFileSync(
            path.join(feedsDir, feedId, "meta.yaml"),
            'utf8'
        )
    );
    
    let posts: Post[] | undefined = undefined;
    
    if (includePosts) posts = await getFeedPosts(feedId);
    
    return {
        id: feedId,
        meta: feedMeta,
        url: `/feeds/${feedId}`,
        rss: `/feeds/${feedId}/feed.rss`,
        urlShort: `jojudge.com/feeds/${feedId}`,
        posts
    } as Feed;
}

export async function getAllFeeds(): Promise<Feed[]> {
    const feeds = await Promise.all(getFeedIds().map((feedId: string) => getFeed(feedId)));
    feeds.sort((a: Feed, b: Feed) => {
        const orderA = a.meta.order || 0;
        const orderB = b.meta.order || 0;
        return orderB - orderA;
    });
    return feeds;
}