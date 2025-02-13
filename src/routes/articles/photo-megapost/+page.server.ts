import { createGitHubLinks } from '$lib/Gallery.server';

export async function load({ route }) {
    const galleries = await createGitHubLinks(import.meta.dirname);
    return { galleries };
};