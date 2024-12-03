import * as fs from 'fs';
import { compile } from 'mdsvex';

import { type ArticleFrontmatter } from '$lib/Article.js';

export async function load({ route }) {
	const postContents = fs.readFileSync(`src/routes/${route.id}/+page.svx`, 'utf-8');
	const compiled = await compile(postContents);
	const fm = compiled?.data?.fm as ArticleFrontmatter;
	return {
		fm,
		id: route.id
	};
}