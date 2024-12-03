<script lang="ts">
	import Layout from "$lib/Layout.svelte";
	import ArticleFeed from "$lib/ArticleFeed.svelte";
	
	export let data;
</script>

<Layout data={data} bgText={data.slug}>
	<h1>Category: {data.slug}</h1>
	<ArticleFeed articles={data.articles} />
</Layout>