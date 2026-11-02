<script lang="ts">
	import Layout from "$lib/Layout.svelte";
	import ArticleFeed from "$lib/ArticleFeed.svelte";
	import Button from "$joeysvelte/Button.svelte";
	
	export let data;
	
	$: rss = `/category/${data.slug}/feed.rss`;
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="heyjoeway: articles - {data.slug}" href={rss}>
</svelte:head>

<Layout bgText={data.slug}>
	<div class="heading">
		<h1>Category: {data.slug}</h1>
		<Button onClick={rss}>📡 RSS</Button>
	</div>
	<ArticleFeed articles={data.articles} />
</Layout>

<style>
	.heading {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 8px;
	}
</style>
