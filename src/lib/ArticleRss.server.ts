import { render } from 'svelte/server';

import { getArticles } from '$lib/Article';
import { cachedDuringBuild } from '$lib/BuildCache.server';
import {
    absoluteUrl,
    absolutizeHtml,
    buildRss,
    escapeHtml
} from '$lib/Rss.server';

const articleComponents = import.meta.glob(
    '/src/routes/articles/*/+page.svx',
    { import: 'default' }
);

// Some articles get data from their own load function (e.g. photo galleries)
const articleServerModules = import.meta.glob(
    '/src/routes/articles/*/+page.server.ts'
) as Record<string, () => Promise<{ load?: (event: any) => any }>>;

// The site is client-rendered, but articles are plain enough to render on
// the server for feed readers. Falls back to just the description on failure.
function renderArticle(slug: string): Promise<string | undefined> {
    // Rendered once for the main feed and again for each of its categories
    return cachedDuringBuild(`article-html:${slug}`, () => renderArticleUncached(slug));
}

async function renderArticleUncached(slug: string): Promise<string | undefined> {
    const load = articleComponents[`/src/routes/articles/${slug}/+page.svx`];
    if (!load) return undefined;
    try {
        const component = await load() as any;
        const serverModule = await articleServerModules[`/src/routes/articles/${slug}/+page.server.ts`]?.();
        const data = await serverModule?.load?.({
            route: { id: `/articles/${slug}` },
            params: {}
        }) ?? {};
        return render(component, { props: { data } }).body
            .replace(/<!--[[\]!]*-->/g, '') // Hydration markers
            .replace(/\son\w+="[^"]*"/g, '') // Svelte's inline onload/onerror hooks
            .trim();
    } catch (e) {
        console.warn(`Couldn't render article ${slug} for RSS:`, e);
        return undefined;
    }
}

// All articles, or only those in one category
export async function buildArticlesRss(category?: string): Promise<string> {
    const articles = await getArticles(category);
    
    const path = category ? `/category/${category}/` : "/articles/";
    
    const items = await Promise.all(articles.map(async article => {
        const link = absoluteUrl(article.path + "/");
        const body = await renderArticle(article.slug)
            ?? (article.fm?.description ? `<p>${escapeHtml(article.fm.description)}</p>` : "");
        return {
            title: article.fm?.title,
            link,
            html: absolutizeHtml(body),
            date: article.fm?.date,
            updated: article.fm?.last_modified_at
        };
    }));
    
    return buildRss({
        title: category ? `heyjoeway: ${category} articles` : "heyjoeway: articles",
        link: absoluteUrl(path),
        description: category ? `Articles from heyjoeway tagged ${category}` : "Articles from heyjoeway",
        self: absoluteUrl(`${path}feed.rss`),
        items
    });
}

