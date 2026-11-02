<script lang="ts">
	import ArticleLayout from "$lib/ArticleLayout.svelte";
	import ArticleFeed from "$lib/ArticleFeed.svelte";
	import Button from "$joeysvelte/Button.svelte";
	
	export let data;
	
	const articlesPinned = data.articles.filter(
		(article) => article.fm?.pinned
	);
	const articlesUnpinned = data.articles.filter(
		(article) => !article.fm?.pinned
	);
</script>
<ArticleLayout data={data}>
	{#if articlesPinned.length > 0}
		<h1>Pinned Articles</h1>
		<ArticleFeed articles={articlesPinned} />
		<hr>
		<p>No articles found.</p>
	{/if}
	<div class="heading">
		<h1>Recent Articles</h1>
		<Button onClick="/articles/feed.rss">📡 RSS</Button>
	</div>
	<ArticleFeed articles={articlesUnpinned} />
</ArticleLayout>

<style>
	.heading {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 8px;
	}
</style>
