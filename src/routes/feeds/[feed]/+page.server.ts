import { getFeed, getFeedIds } from '$lib/Feed.js';

export async function load({ params }) {
    return await getFeed(params.feed, true);
}

export async function entries() {
    return getFeedIds().map((feedId: string) => ({ feed: feedId }));
}