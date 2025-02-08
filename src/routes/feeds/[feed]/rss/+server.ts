export const prerender = true;

import { getFeedIds } from '$lib/Feed.js';

import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = ({ url }) => {
    return new Response("hi");
}

export async function entries() {
    return getFeedIds().map((feedId: string) => ({ feed: feedId }));
}