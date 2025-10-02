import { getAllFeeds } from '$lib/Feed.server';

export async function load() {
    const feeds = await getAllFeeds();
    return { feeds };
}