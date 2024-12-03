import { getArticles } from '$lib/Article';

export async function load() {
	return {
		articles: await getArticles()
	};
}