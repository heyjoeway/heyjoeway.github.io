import fs from "fs";
import path from "path";
import { githubLink } from "./Utils";

export interface GalleryDescriptor {
    name: string;
    description: string;
    images: Record<string, any>;
    thumbs: Record<string, any>;
}

export function createGitHubLinks(pathRoot: string) {
    if (pathRoot.includes(".svelte-kit")) {
        pathRoot = pathRoot.replace(
            [".svelte-kit", "output", "server", "entries", "pages"].join(path.sep),
            ["src", "routes"].join(path.sep)
        )
    }
    
    const galleries = {} as Record<string, Record<string, string>>;
    
    // Get list of all subdirectories and their contents
    fs.readdirSync(pathRoot).forEach(galleryName => {
        const galleryPath = path.join(pathRoot, galleryName);
        const stat = fs.statSync(galleryPath);
        if (!stat.isDirectory()) return;
        
        const galleryImages = {} as Record<string, string>;
        
        fs.readdirSync(galleryPath).forEach(fileName => {
            const filePath = path.join(galleryPath, fileName);
            const key = `./${galleryName}/${fileName}`;
            galleryImages[key] = githubLink(filePath);
        });
        
        galleries[galleryName] = galleryImages;
    });
    
    return galleries;
}