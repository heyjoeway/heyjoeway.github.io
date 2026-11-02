export const prerender = true;

import type { RequestHandler } from "@sveltejs/kit";

import { getArticles } from '$lib/Article';
import {
    absoluteUrl,
    buildRss,
    escapeHtml,
    rssResponse
} from '$lib/Rss.server';

// Articles are full Svelte components, so readers get the description and a link
export const GET: RequestHandler = async () => {
    const articles = await getArticles();
    
    const xml = buildRss({
        title: "heyjoeway: articles",
        link: absoluteUrl("/articles/"),
        description: "Articles from heyjoeway",
        self: absoluteUrl("/articles/feed.rss"),
        items: articles.map(article => {
            const link = absoluteUrl(article.path + "/");
            const description = article.fm?.description
                ? `<p>${escapeHtml(article.fm.description)}</p>`
                : "";
            return {
                title: article.fm?.title,
                link,
                html: `${description}<p><a href="${link}">Read the article</a></p>`,
                date: article.fm?.date,
                updated: article.fm?.last_modified_at
            };
        })
    });
    
    return rssResponse(xml);
}
