import { getArticleFrontmatter } from '$lib/Article.js';

export async function load({ route }) {
	const postPath = `src/routes/${route.id}/+page.svx`;
	const fm = await getArticleFrontmatter(postPath);
	
	return {
		fm,
		id: route.id
	};
}