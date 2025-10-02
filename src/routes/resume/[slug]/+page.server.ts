import { getAllFeeds } from '$lib/Feed.server';
import type Profile from '../Profile';

export async function load(
	{ params }: { params: { slug: string } }
) {
	let profile = {};
	try {
		profile = (await import(`../profiles/${params.slug}.json`)).default as Profile;
	} catch (e) {
		return { status: 404 };
	}
	
	const feeds = await getAllFeeds(true);
	return { feeds, profile };
}

interface RouteParams {
	slug: string;
}

export async function entries() {
	const profileFiles = import.meta.glob('../profiles/*.json', { eager: true });
	return Object.keys(profileFiles).map((filePath) => {
		const fileName = filePath.split('/').pop();
		const slug = fileName?.replace('.json', '');
		return <RouteParams> { slug };
	});
}	