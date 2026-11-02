export const prerender = true;

import type { RequestHandler } from "@sveltejs/kit";

import { getAllCategories } from '$lib/Article';
import { buildArticlesRss } from '$lib/ArticleRss.server';
import { rssResponse } from '$lib/Rss.server';

export const GET: RequestHandler = async ({ params }) => {
    return rssResponse(await buildArticlesRss(params.slug));
}

export async function entries() {
    const categories = await getAllCategories();
    return categories.map(category => ({ slug: category }));
}
