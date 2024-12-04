import * as fs from 'fs';
import { compile } from 'mdsvex';
import {
	simpleGit,
	CleanOptions,
	type LogResult,
	type DefaultLogFields
} from 'simple-git';

const git = simpleGit().clean(CleanOptions.FORCE);

import { type ArticleFrontmatter } from '$lib/Article.js';

async function getGitCommitDate(path: string) {
	const gitLog: LogResult<DefaultLogFields> = await new Promise(
		(resolve, reject) => git.log(
			{
				"file": path,
				"max-count": 1
			},
			(err, log) => {
				if (err) return reject(err);
				resolve(log);
			}
		)
	);
	if (!gitLog.latest) throw new Error("No git log found");
	return gitLog.latest.date;
}

export async function load({ route }) {
	const postPath = `src/routes/${route.id}/+page.svx`;
	const postContents = fs.readFileSync(postPath, 'utf-8');
	const compiled = await compile(postContents);
	const fm = compiled?.data?.fm as ArticleFrontmatter;

	if (!fm.last_modified_at) {
		try {
			fm.last_modified_at = await getGitCommitDate(postPath);
		} catch (e) {}
	}
	
	return {
		fm,
		id: route.id
	};
}