import { getAllFeeds } from '$lib/Feed.js';

export async function load() {
    const feeds = await getAllFeeds();
    return { feeds };
}