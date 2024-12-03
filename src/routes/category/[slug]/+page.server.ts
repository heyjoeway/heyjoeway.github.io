import {
	getArticles,
	getAllCategories
} from '$lib/Article';

export async function load({ params }) {
	return {
		articles: await getArticles(params.slug),
		slug: params.slug
	};
}

interface RouteParams {
	slug: string;
}

export async function entries() {
	const categories = await getAllCategories();
	return categories.map(category => <RouteParams> { slug: category });
}