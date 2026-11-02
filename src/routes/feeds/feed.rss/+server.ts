export const prerender = true;

import type { RequestHandler } from "@sveltejs/kit";

import { getAllFeeds } from '$lib/Feed.server';
import type { Post } from '$lib/Feed';
import {
    absoluteUrl,
    buildRss,
    postToRssItem,
    rssResponse
} from '$lib/Rss.server';

// Everything that can show up on the home page
export const GET: RequestHandler = async () => {
    const feeds = await getAllFeeds(true);
    
    const posts = (feeds
        .map(feed => feed.posts)
        .filter(x => x)
        .flat()
    ) as Post[];
    
    const xml = buildRss({
        title: "heyjoeway: all posts",
        link: absoluteUrl("/"),
        description: "Posts from every feed on heyjoeway",
        self: absoluteUrl("/feeds/feed.rss"),
        items: posts
            .filter(post => !post.fm.unlisted && !post.fm.hideHome)
            .map(postToRssItem)
    });
    
    return rssResponse(xml);
}
