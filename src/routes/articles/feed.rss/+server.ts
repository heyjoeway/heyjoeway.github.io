export const prerender = true;

import type { RequestHandler } from "@sveltejs/kit";

import { buildArticlesRss } from '$lib/ArticleRss.server';
import { rssResponse } from '$lib/Rss.server';

export const GET: RequestHandler = async () => {
    return rssResponse(await buildArticlesRss());
}
