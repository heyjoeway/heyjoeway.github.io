import { getAllCategories } from '$lib/Article';

export const prerender = true;
export const trailingSlash = 'always';

export async function load() {
	return {
		categories: await getAllCategories()
	};
}