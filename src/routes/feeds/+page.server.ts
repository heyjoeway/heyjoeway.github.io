import { getFeed, getFeedIds } from '$lib/Feed.js';

export async function load() {
    const feeds = await Promise.all(getFeedIds().map((feedId: string) => getFeed(feedId)));
    return { feeds };
}