import {
    getFeed,
    getFeedPost,
    getFeedIds,
    getFeedPostIds
} from '$lib/Feed.js';

export async function load({ params }) {
    const feed = await getFeed(params.feed);
    const post = await getFeedPost(feed, params.post);
    return { feed, post }
}

export async function entries() {
    const feedIds = getFeedIds();
    const params = feedIds.map((feedId: string) => {
        const postIds = getFeedPostIds(feedId); 
        return postIds.map((postId: string) => ({
            feed: feedId,
            post: postId
        }));
    });
    
    return params.flat();
}