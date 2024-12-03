<script lang="ts">
	import Layout from "$lib/Layout.svelte";
	import ArticleFeed from "$lib/ArticleFeed.svelte";
	
	export let data;
</script>
<Layout data={data}>
	<h1>Pinned</h1>
	<ArticleFeed pinned={true} articles={data.articles} />
	<hr>
	<h1>Recent Posts</h1>
	<ArticleFeed articles={data.articles} />
</Layout>