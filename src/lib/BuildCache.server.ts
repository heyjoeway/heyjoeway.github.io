import { building } from '$app/environment';

const cache = new Map<string, Promise<unknown>>();

// Prerendering loads the same files' data for every page (all articles for
// the category list, all posts for the home page, etc.), so during a build
// compute each thing once. Dev skips this so edits show up without a restart.
export function cachedDuringBuild<T>(key: string, fn: () => Promise<T>): Promise<T> {
    if (!building) return fn();
    if (!cache.has(key)) cache.set(key, fn());
    return cache.get(key) as Promise<T>;
}
