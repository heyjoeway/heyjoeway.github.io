<script lang="ts">
	import { formatDate } from "$lib/Utils";
	import Tags from "$lib/Tags.svelte";
	import { strToTagDetails } from "$lib/Tags";
	import { type ArticleLoaded } from "$lib/Article";
	
	export let articles: ArticleLoaded[];	
	export let pinned: boolean = false;
	
	// Get the first paragraph of the article using regex to find the contents of the first <p> element	
	function getFirstParagraph(article: string) {
		const regex = /<p>(.*?)<\/p>/;
		const match = regex.exec(article);
		if (!match) return "";
		return match[1];
	}
</script>

<style lang="scss">
	.post-meta {
		float: right;
		font-family: "franklin_gothicregular", sans-serif;
		color: #DDD;
		font-size: 14px;
	}
</style>

{#each articles as article}
	{#if (!!article.fm?.pinned == pinned) || !pinned}
		<div>
			<span class="post-meta">{formatDate(article.fm?.date)}</span>
			<a href="{article.path}"><h2>{article.fm?.title}</h2></a>
		</div>
		<span>{getFirstParagraph(article.code + "")}</span><br>
		<Tags tags={strToTagDetails(article.fm?.categories + "")} />
		<br><br>
	{/if}
{/each}