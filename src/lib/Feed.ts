import fs from 'fs';
import { compile } from 'mdsvex';
import * as yaml from 'yaml';
import { githubLink, splitext } from '$lib/Utils.js';

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

export interface Media {
    id: string;
    extension: string;
    url: string;
    urlGitHub: string;
}

export interface Post {
    id: string;
    html: string;
    media: Media[];
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

export async function getFeedPost(feedId: string, postId: string): Promise<Post> {
    const mediaFileNames = (
        fs.readdirSync(
            path.join(feedsDir, feedId, postId),
            { withFileTypes: true }
        )
            .filter((dirent: fs.Dirent) => !dirent.isDirectory())
            .map((dirent: fs.Dirent) => dirent.name)
            .filter((name: string) => name !== 'post.md')
    );
    
    const media = mediaFileNames.map((mediaFileName: string) => {
        const [id, extension] = splitext(mediaFileName);
        return {
            id,
            extension,
            url: `/feeds/${feedId}/${postId}/${mediaFileName}`,
            urlGitHub: githubLink(path.join(feedsDir, feedId, postId, mediaFileName))
        } as Media;
    });
    
    const postPath = path.join(feedsDir, feedId, postId, "post.md");
    const postContents = fs.readFileSync(postPath, 'utf-8');
    const compiled = await compile(postContents);
    const fm = (compiled?.data?.fm || {}) as Record<string, any>;
    fm.urlShort = `jojudge.com/feeds/${feedId}/${postId}`;          
    
    if (!Object.hasOwn(fm, 'date')) {
        try {
            fm.date = await getFirstCommitDate(postPath);
        } catch (e) { }
    }
    
    if (!Object.hasOwn(fm, 'last_modified_at')) {
        try {
            fm.last_modified_at = await getLatestCommitDate(postPath);
            if (fm.last_modified_at === fm.date) {
                delete fm.last_modified_at;
            }
        } catch (e) {}
    }
    
    return {
        id: postId,
        html: compiled?.code || '',
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