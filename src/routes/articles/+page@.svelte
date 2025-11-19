<script lang="ts">
	import ArticleLayout from "$lib/ArticleLayout.svelte";
	import ArticleFeed from "$lib/ArticleFeed.svelte";
	
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
	<h1>Recent Articles</h1>
	<ArticleFeed articles={articlesUnpinned} />
</ArticleLayout>