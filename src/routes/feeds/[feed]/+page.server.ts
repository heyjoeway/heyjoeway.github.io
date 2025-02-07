import path from "path";
import fs from 'fs';
import { compile } from 'mdsvex';
import * as yaml from 'yaml';

import {
	getLatestCommitDate,
	getFirstCommitDate
} from '$lib/Git';

function splitext(path: string) {
    const lastDot = path.lastIndexOf(".");
    return [
        path.slice(0, lastDot),
        path.slice(lastDot).toLowerCase()
    ];
}

const GITHUB_ROOT = "https://github.com/heyjoeway/heyjoeway.github.io/tree/master/";

function githubLink(filePath: string) {
    const filePathRelative = path.relative(
        path.resolve("./"),
        filePath
    );
    const fileGitHubUrl = new URL(filePathRelative, GITHUB_ROOT);
    return fileGitHubUrl.href;
}

const feedsDir = 'src/feeds';

export async function load({ params }) {
    const feedId = params.feed;
    const feedMeta = yaml.parse(
        fs.readFileSync(
            `${feedsDir}/${feedId}/meta.yaml`,
            'utf8'
        )
    );
    
    const postDirents = fs.readdirSync(`${feedsDir}/${feedId}`, { withFileTypes: true })
            .filter((dirent: fs.Dirent) => dirent.isDirectory())
            
    const posts = await Promise.all(postDirents.map(async (postDirent: fs.Dirent) => {
        const postId = postDirent.name;
        
        const mediaFileNames = fs.readdirSync(`${feedsDir}/${feedId}/${postId}`, { withFileTypes: true })
            .filter((dirent: fs.Dirent) => !dirent.isDirectory())
            .map((dirent: fs.Dirent) => dirent.name)
            .filter((name: string) => name !== 'post.md');
            
        const media = mediaFileNames.map((mediaFileName: string) => {
            const [id, extension] = splitext(mediaFileName);
            return {
                id,
                extension,
                url: `jojudge.com/feeds/${feedId}/${postId}/${mediaFileName}`,
                urlGitHub: githubLink(`${feedsDir}/${feedId}/${postId}/${mediaFileName}`)
            }
        });
        
        const postPath = `${feedsDir}/${feedId}/${postId}/post.md`;
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
            url: `/feeds/${feedId}/${postId}`,
        }
    }));
    
    return {
        id: feedId,
        meta: feedMeta,
        url: `/feeds/${feedId}`,
        urlShort: `jojudge.com/feeds/${feedId}`,
        posts
    };
}

export async function entries() {
    const entries = fs.readdirSync(feedsDir, { withFileTypes: true })
        .filter((dirent: fs.Dirent) => dirent.isDirectory())
        .map((dirent: fs.Dirent) => ({ feed: dirent.name }));
    return entries;
}