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

export async function getAllArticleSlugs(): Promise<string[]> {
	// Get list of all directories in `content/articles`
	const slugs = (
		fs.readdirSync(
			'src/routes/articles',
			{ withFileTypes: true }
		)		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name)
	);
	// Filter out any directories that do not have a +page.svx file
	const validSlugs = slugs.filter(slug => {
		const svxPath = `src/routes/articles/${slug}/+page.svx`;
		return fs.existsSync(svxPath);
	});
	return validSlugs;
}

export async function getAllCategories(): Promise<string[]> {
	// Get list of all directories in `content/articles`
	const articleSlugs = await getAllArticleSlugs();
	// For each slugs, compile the page.svx file and extract the categories
	const categorySet: Set<string> = new Set();
	await Promise.all(articleSlugs.map(async slug => {
		const postPath = `src/routes/articles/${slug}/+page.svx`;
		try {
			const postContents = fs.readFileSync(postPath, 'utf-8');
			const compiled = await compile(postContents);
			const frontmatter = await getArticleFrontmatter(postPath, compiled);
			frontmatter.categories?.split(" ").forEach(category => categorySet.add(category));
		} catch (e) {
			console.warn(`Error processing article ${slug}:`, e);
		}
	}));
	return Array.from(categorySet);
}

export async function getArticle(slug: string): Promise<ArticleLoaded | undefined> {
	const path = `/articles/${slug}`;
	const svxPath = `src/routes/articles/${slug}/+page.svx`;
	try {
		const articleRaw = (
			await util.promisify(fs.readFile)
				(svxPath, 'utf-8')
		) as string;
		const compiled = await compile(articleRaw) as MdsvexCompiled;
		const code = compiled?.code;
		const fm = await getArticleFrontmatter(svxPath, compiled);
		return {
			slug,
			path,
			code,
			fm
		} as ArticleLoaded;
	} catch (e) {
		console.warn(`Error processing article ${slug}:`, e);
		return undefined;
	}
}

export async function getArticles(category?: string): Promise<ArticleLoaded[]> {
	// Get list of all directories in `content/articles`
	const slugs = await getAllArticleSlugs();
	
	let articles = (await Promise.all(
		slugs.map(getArticle)
	)).filter(article => article !== undefined);
	
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
