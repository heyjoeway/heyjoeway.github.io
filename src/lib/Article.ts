import * as fs from 'fs';
import * as util from 'util';
import { compile } from 'mdsvex';
import {
	getLatestCommitDate,
	getFirstCommitDate
} from '$lib/Git.server';

export interface ArticleFrontmatter {
	title: string;
	description: string;
	date: string;
	categories: string;
	pinned: boolean;
	bgText: string | undefined;
	comments: boolean | undefined;
	last_modified_at: string | undefined;
}

export interface ArticleLoaded {
	slug: string;
	path: string;
	code?: string;
	fm?: ArticleFrontmatter;
}

interface MdsvexCompiled {
    code: string;
    data?: Record<string, unknown>;
    map?: string;
}

export async function getAllCategories(): Promise<string[]> {
	// Get list of all directories in `content/articles`
	const articleSlugs = (
		fs.readdirSync(
			'src/routes/articles',
			{ withFileTypes: true }
		)
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name )
	);
	// For each slugs, compile the page.svx file and extract the categories
	const categorySet: Set<string> = new Set();
	await Promise.all(articleSlugs.map(async slug => {
		const postPath = `src/routes/articles/${slug}/+page.svx`;
		const postContents = fs.readFileSync(postPath, 'utf-8');
		const compiled = await compile(postContents);
		const frontmatter = await getArticleFrontmatter(postPath, compiled);
		frontmatter.categories?.split(" ").forEach(category => categorySet.add(category));
	}));
	return Array.from(categorySet);
}

export async function getArticles(category?: string): Promise<ArticleLoaded[]> {
	// Get list of all directories in `content/articles`
	let articles = (
		fs.readdirSync(
			'src/routes/articles',
			{ withFileTypes: true }
		)
		.filter(dirent => dirent.isDirectory())
		.map(dirent => ({
			slug: dirent.name,
			path: `/articles/${dirent.name}`
		} as ArticleLoaded))
	);
	
	await Promise.all(articles.map(async article => {
		const articlePath = `src/routes/articles/${article.slug}/+page.svx`;
		const articleRaw = (
			await util.promisify(fs.readFile)
				(articlePath, 'utf-8')
		) as string;
		const compiled = await compile(articleRaw) as MdsvexCompiled;
		article.code = compiled?.code;
		article.fm = await getArticleFrontmatter(articlePath, compiled);
	}));
	
	if (category) {
		articles = articles.filter(article => {
			return article.fm?.categories?.split(" ").includes(category)
		});
	}
	
	articles.sort((a, b) => {
		if (!a.fm?.date || !b.fm?.date) return 0;
		return new Date(b.fm.date).getTime() - new Date(a.fm.date).getTime();
	});
	
	return articles;
}

export async function getArticleFrontmatter(
	postPath: string,
	postCompiled: MdsvexCompiled | undefined = undefined
): Promise<ArticleFrontmatter> {
	if (!postCompiled) {
		const postContents = fs.readFileSync(postPath, 'utf-8');
		postCompiled = await compile(postContents);
	}
	const fm = postCompiled?.data?.fm as ArticleFrontmatter;
	
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
	
	return fm
}
