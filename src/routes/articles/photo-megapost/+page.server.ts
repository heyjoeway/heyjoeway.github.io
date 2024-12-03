import { createGitHubLinks } from '$lib/Gallery';

export async function load({ route }) {
    const galleries = createGitHubLinks(import.meta.dirname);
    return { galleries };
};