<script lang="ts">
    import Center from "$lib/Center.svelte";
	import Layout from "$lib/Layout.svelte";
    import { default as SV$Post } from "$lib/Post.svelte";
	import type { Post } from "$lib/Feed.ts";
    import Masonry from 'svelte-bricks'
	
	export let data;
</script>
<Layout>
	<h1>Recent Posts</h1>
	{#if data.posts && data.posts.length > 0}
	<Masonry
		items={data.posts}
		getId={(post: Post) => post.id}
		let:item={post}
		minColWidth={320}
		maxColWidth={600}
		animate={false}
		gap={0}
		style="gap:20px"
	>
		<SV$Post post={post} inFeed={true} />
		<hr>
	</Masonry>
	{:else}
		<Center>
			No posts!
		</Center>
		<br>
	{/if}
</Layout>