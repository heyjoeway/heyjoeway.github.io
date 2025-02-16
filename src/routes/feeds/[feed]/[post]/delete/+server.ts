export const prerender = false;

import type { RequestHandler } from "@sveltejs/kit";
import path from "path";
import { promises as fs } from "fs";

export const DELETE: RequestHandler = async ({ request, params }) => {
    const feedId = params.feed;
    if (!feedId) throw new Error("Invalid feed ID");
    const postId = params.post;
    if (!postId) throw new Error("Invalid post ID");
    
    const pathFeed = path.join(import.meta.dirname, "..", "..", "..", "..", "..", "feeds", feedId);
    const pathPostDir = path.join(pathFeed, postId);
    
    try {
        await fs.rm(pathPostDir, { recursive: true, force: true });
    } catch (e) {
        throw new Error(`Failed to delete post directory: ${e}`);
    }
    
    return new Response(null, { status: 204 });
};