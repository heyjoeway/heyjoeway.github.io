<script lang="ts">
	import ArticleLayout from "$lib/ArticleLayout.svelte";
	import ArticleFeed from "$lib/ArticleFeed.svelte";
	
	export let data;
</script>
<ArticleLayout data={data}>
	<h1>Pinned</h1>
	<ArticleFeed pinned={true} articles={data.articles} />
	<hr>
	<h1>Recent Posts</h1>
	<ArticleFeed articles={data.articles} />
</ArticleLayout>