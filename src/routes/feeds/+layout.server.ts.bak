import path from "path";
import fs from 'fs';
import { compile } from 'mdsvex';

import {
	getLatestCommitDate,
	getFirstCommitDate
} from '$lib/Git';

const GITHUB_ROOT = "https://github.com/heyjoeway/heyjoeway.github.io/tree/master/";

function githubLink(filePath: string) {
    const filePathRelative = path.relative(
        path.resolve("./"),
        filePath
    );
    const fileGitHubUrl = new URL(filePathRelative, GITHUB_ROOT);
    return fileGitHubUrl.href;
}

function splitext(path: string) {
    const lastDot = path.lastIndexOf(".");
    return [
        path.slice(0, lastDot),
        path.slice(lastDot).toLowerCase()
    ];
}

export async function load() {
    const feedsDir = 'src/routes/feeds';
    
    const feedIds = fs.readdirSync(feedsDir, { withFileTypes: true })
        .filter((dirent: fs.Dirent) => dirent.isDirectory())
        .map((dirent: fs.Dirent) => dirent.name);
        
    const feeds = await Promise.all(feedIds.map(async (feedId: string) => {
        const feedTitle = fs.readFileSync(`${feedsDir}/${feedId}/title.txt`, 'utf8');
        
        const postDirents = fs.readdirSync(`${feedsDir}/${feedId}`, { withFileTypes: true })
            .filter((dirent: fs.Dirent) => dirent.isDirectory())
            
        const posts = await Promise.all(postDirents.map(async (postDirent: fs.Dirent) => {
            const postId = postDirent.name;
            
            const mediaFileNames = fs.readdirSync(`${feedsDir}/${feedId}/${postId}`, { withFileTypes: true })
                .filter((dirent: fs.Dirent) => !dirent.isDirectory())
                .map((dirent: fs.Dirent) => dirent.name)
                .filter((name: string) => !name.startsWith("+"));
                
            const media = mediaFileNames.map((mediaFileName: string) => {
                const [id, extension] = splitext(mediaFileName);
                return {
                    id,
                    extension,
                    url: `jojudge.com/feeds/${feedId}/${postId}/${mediaFileName}`,
                    urlGitHub: githubLink(`${feedsDir}/${feedId}/${postId}/${mediaFileName}`)
                }
            });
            
            const postPath = `${feedsDir}/${feedId}/${postId}/+page.svx`;
            const postContents = fs.readFileSync(postPath, 'utf-8');
            const isEmpty = postContents.trim() === '';
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
                isEmpty,
                media,
                fm,
                idFull: `${feedId}/${postId}`,
            }
        }));
                
        return {
            id: feedId,
            title: feedTitle,
            urlShort: `jojudge.com/feeds/${feedId}`,
            posts
        }
    }));
        
    return { feeds };
}