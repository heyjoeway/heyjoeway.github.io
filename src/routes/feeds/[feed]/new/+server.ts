export const prerender = false;

import type { RequestHandler } from "@sveltejs/kit";
import { redirect } from '@sveltejs/kit';
import * as fs from 'fs';
import path from "path";

export const POST: RequestHandler = async ({ request, params }) => {
    const feedId = params.feed;
    if (!feedId) throw new Error("Invalid feed ID");
    const formData = await request.formData();
    const files = formData.getAll('files') as File[];
    
    const pathFeed = path.join(import.meta.dirname, "..", "..", "..", "..", "feeds", feedId);
    const date = new Date();
    const monthStr = (date.getMonth() + 1).toString().padStart(2, "0");
    const dateStr = date.getDate().toString().padStart(2, "0");
    const yearStr = (date.getFullYear() % 100).toString().padStart(2, "0");
    let hours = date.getHours();
    const ampmStr = hours >= 12 ? "PM": "AM";
    if (hours == 0) hours = 12;
    if (hours != 12) hours %= 12;
    const hourStr = hours.toString().padStart(2, "0");
    const minuteStr = date.getMinutes().toString().padStart(2, "0");
    let increment = 0;

    let pathNewPostDir;
    while (true) {
        const incrementStr = increment ? `_${increment}` : "";
        const postId = `${monthStr}${dateStr}${yearStr}_${hourStr}${minuteStr}${ampmStr}${incrementStr}`;
        pathNewPostDir = path.join(pathFeed, postId);
        // Check if dir already exists. If it does, up the increment and try again
        try {
            await fs.promises.access(pathNewPostDir);
            increment++;
            continue
        } catch { }
        await fs.promises.mkdir(pathNewPostDir);
        break;
    }
    
    const pathNewPostFile = path.join(pathNewPostDir, "post.md");
    const postText = formData.get("text");
    if (typeof postText === 'string') {
        await fs.promises.writeFile(pathNewPostFile, postText);
    } else {
        throw new Error("Could not write post text");
    }
    
    for (const file of files) {
        if (!file.name) continue;
        if (!file.size) continue;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const filePath = path.join(pathNewPostDir, file.name)
        await fs.promises.writeFile(filePath, buffer);
    }
    
    return redirect(302, `/feeds/${feedId}`);
}