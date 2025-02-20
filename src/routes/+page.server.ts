import { getAllFeeds, sortPosts, type Post } from '$lib/Feed.js';

export async function load() {
	const feeds = await getAllFeeds(true);
	
	let posts = (feeds
		.map(feed => feed.posts) // Get all posts from each feed
		.filter(x => x) // Remove undefined
		.flat() // Put all into a single list
	) as Post[];
	posts = posts.filter(post => !post.fm.hideHome); // Remove hidden posts
	sortPosts(posts); // Since we combined them all, we need to sort them again
	posts = posts.slice(0, 5);
	
	return { posts };
}