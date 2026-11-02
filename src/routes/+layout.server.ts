import { getAllCategories } from '$lib/Article';
import { getCname } from '$lib/Utils.server';

export const prerender = true;
export const ssr = false;
export const trailingSlash = 'always';

export async function load() {
	return {
		categories: await getAllCategories(),
		origin: `https://${getCname().trim()}`
	};
}