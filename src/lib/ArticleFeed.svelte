<script lang="ts">
	import { formatDate } from "$lib/Utils";
	import Tags from "$lib/Tags.svelte";
	import { strToTagDetails } from "$lib/Tags";
	import { type ArticleLoaded } from "$lib/Article";
	
	export let articles: ArticleLoaded[];	
	
	// Get the first paragraph of the article using regex to find the contents of the first <p> element	
	function getFirstParagraph(article: string) {
		const regex = /<p>(.*?)<\/p>/;
		const match = regex.exec(article);
		if (!match) return "";
		return match[1];
	}
</script>

<style lang="scss">
	.meta {
		float: right;
		font-family: "franklin_gothicregular", sans-serif;
		color: var(--joeysvelte-text-colors-secondary);
		font-size: 14px;
	}
</style>

{#each articles as article}
	<div>
		<span class="meta">{formatDate(article.fm?.date)}</span>
		<a href="{article.path}"><h2>{article.fm?.title}</h2></a>
	</div>
	<span>{getFirstParagraph(article.code + "")}</span><br>
	<Tags tags={strToTagDetails(article.fm?.categories + "")} />
	<br><br>
{/each}