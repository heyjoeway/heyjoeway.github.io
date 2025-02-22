export const prerender = false;

import type { RequestHandler } from "@sveltejs/kit";
import path from "path";
import { promises as fs } from "fs";
import { redirect } from '@sveltejs/kit';


export const POST: RequestHandler = async ({ request, params }) => {
    const feedId = params.feed;
    if (!feedId) throw new Error("Invalid feed ID");
    const postId = params.post;
    if (!postId) throw new Error("Invalid post ID");
    
    const pathFeed = path.join(import.meta.dirname, "..", "..", "..", "..", "..", "feeds", feedId);
    const pathPostDir = path.join(pathFeed, postId);
    const pathNewPostFile = path.join(pathPostDir, "post.md");
    
    // Overwrite post text
    const formData = await request.formData();
    const postText = formData.get("text");
    if (typeof postText === 'string') {
        await fs.writeFile(pathNewPostFile, postText);
    } else {
        throw new Error("Could not write post text");
    }
    
    return redirect(302, `/feeds/${feedId}`);
};