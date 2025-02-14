import * as fs from 'fs';
import { compile } from 'mdsvex';

import {
	getLatestCommitDate,
	getFirstCommitDate
} from '$lib/Git.server';
import { type ArticleFrontmatter } from '$lib/Article.js';

export async function load({ route }) {
	const postPath = `src/routes/${route.id}/+page.svx`;
	const postContents = fs.readFileSync(postPath, 'utf-8');
	const compiled = await compile(postContents);
	const fm = compiled?.data?.fm as ArticleFrontmatter;

	if (!fm.last_modified_at) {
		try {
			fm.last_modified_at = await getLatestCommitDate(postPath);
		} catch (e) {}
	}
	
	if (!fm.date) {
		try {
			fm.date = await getFirstCommitDate(postPath) || '';
		} catch (e) {}
	}
	
	return {
		fm,
		id: route.id
	};
}