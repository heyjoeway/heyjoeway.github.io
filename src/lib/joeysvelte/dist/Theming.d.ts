/// <reference types="svelte" />
import type { ImageUploadFile } from './ImageUpload.ts';
export interface Theme {
    text: {
        primary: {
            color: string;
        };
        secondary: {
            color: string;
        };
    };
    textfield: {
        background: {
            color: string;
        };
    };
    background: {
        color: string;
        image: ImageUploadFile;
        topLeft: {
            text: string;
            color: string;
        };
        bottomRight: {
            color: string;
        };
    };
    category: {
        colors: string[];
    };
    item: {
        folder: {
            color: string;
        };
        liveStream: {
            colorChecking: string;
            colorOnline: string;
        };
    };
    frame: {
        background: {
            color: string;
        };
        border: {
            width: string;
            color: string;
        };
    };
    action: {
        colors: {
            confirm: string;
            warning: string;
            danger: string;
        };
    };
    clickable: {
        colors: {
            hover: string;
            active: string;
        };
    };
}
export declare let currentTheme: import("svelte/store").Writable<Theme>;
export declare let bundledThemes: Record<string, Theme>;
export declare let savedThemes: import("svelte/store").Writable<Record<string, Theme>>;
