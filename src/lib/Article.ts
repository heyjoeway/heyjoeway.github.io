import * as fs from 'fs';
import * as util from 'util';
import { compile } from 'mdsvex';

export interface ArticleFrontmatter {
	title: string;
	description: string;
	date: string;
	categories: string;
	pinned: boolean;
	bgText: string | undefined;
	comments: boolean | undefined;
}

export interface ArticleLoaded {
	slug: string;
	path: string;
	code?: string;
	fm?: ArticleFrontmatter;
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
	const categorySet = new Set();
	await Promise.all(articleSlugs.map(async slug => {
		const postContents = fs.readFileSync(`src/routes/articles/${slug}/+page.svx`, 'utf-8');
		const compiled = await compile(postContents);
		const frontmatter = compiled?.data?.fm as ArticleFrontmatter;
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
		const articleRaw = (
			await util.promisify(fs.readFile)
				(`src/routes/articles/${article.slug}/+page.svx`, 'utf-8')
		) as string;
		const compiled = await compile(articleRaw);
		article.code = compiled?.code;
		article.fm = compiled?.data?.fm as ArticleFrontmatter;
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