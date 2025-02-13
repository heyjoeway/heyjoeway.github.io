import fs from "fs";
import path from "path";

import { githubLink } from "./Utils.server";

export async function createGitHubLinks(pathRoot: string) {
    if (pathRoot.includes(".svelte-kit")) {
        pathRoot = pathRoot.replace(
            [".svelte-kit", "output", "server", "entries", "pages"].join(path.sep),
            ["src", "routes"].join(path.sep)
        )
    }
    
    const galleries = {} as Record<string, Record<string, string>>;
    
    // Get list of all subdirectories and their contents
    
    await Promise.all(fs.readdirSync(pathRoot).map(async (galleryName) => {
        const galleryPath = path.join(pathRoot, galleryName);
        const stat = fs.statSync(galleryPath);
        if (!stat.isDirectory()) return;
        
        const galleryImages = {} as Record<string, string>;
        
        await Promise.all(fs.readdirSync(galleryPath).map(async (fileName) => {
            const filePath = path.join(galleryPath, fileName);
            const key = `./${galleryName}/${fileName}`;
            galleryImages[key] = await githubLink(filePath);
        }));
        
        galleries[galleryName] = galleryImages;
    }));
    
    return galleries;
}