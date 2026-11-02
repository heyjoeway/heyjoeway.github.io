export const prerender = true;

import type { RequestHandler } from "@sveltejs/kit";

import { getFeed, getFeedIds } from '$lib/Feed.server';
import {
    absoluteUrl,
    buildRss,
    postToRssItem,
    rssResponse
} from '$lib/Rss.server';

export const GET: RequestHandler = async ({ params }) => {
    const feed = await getFeed(params.feed!, true);
    
    const xml = buildRss({
        title: `heyjoeway: feeds - ${feed.meta.title}`,
        link: absoluteUrl(feed.url + "/"),
        description: feed.meta.description,
        self: absoluteUrl(feed.rss),
        items: (feed.posts || [])
            .filter(post => !post.fm.unlisted)
            .map(postToRssItem)
    });
    
    return rssResponse(xml);
}

export async function entries() {
    return getFeedIds().map((feedId: string) => ({ feed: feedId }));
}
