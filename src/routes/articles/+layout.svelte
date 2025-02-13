<style lang="scss">	
	.header-container {
		display: flex;
		justify-content: space-between;
		
		h1 {
			margin-top: 0;
		}
	}
	
	.times { 
		display: inline;
		text-align: right;
		flex-shrink: 0;
	}
	
	.dt:not(:first-child) {
		opacity: 0.8;
		font-size: 12px;
	}
	
	time {
		font-family: "franklin_gothicregular", sans-serif;
		font-size: 15px;
		margin-right: 8px;
		vertical-align: middle;;
	}
</style>

<script lang="ts">
	import { formatDate } from "$lib/Utils";
	import Tags from "$lib/Tags.svelte";
	import ArticleLayout from "$lib/ArticleLayout.svelte";
	import { strToTagDetails } from "$lib/Tags";
	import Comments from "$lib/Comments.svelte";
	
	export let data;
	
	const bgText = data.fm.bgText ? data.fm.bgText : data.fm.title;
	
	const dateDetails = [
		{ date: data.fm.date, type: "Published" },
		{ date: data.fm.last_modified_at, type: "Last modified" }
	]
</script>

<ArticleLayout data={data} bgText={bgText}>
	<div class="header-container">
		<div>
			<h1>{data.fm.title}</h1>
			<Tags tags={strToTagDetails(data.fm.categories)}></Tags>
		</div>
		<div class="times">
			{#each dateDetails as dateDetail}
				{#if dateDetail.date}
					<time class="dt" datetime={dateDetail.date} itemprop="datePublished">
						{dateDetail.type} {formatDate(dateDetail.date)}
					</time>
					<br>
				{/if}
			{/each}
		</div>
	</div>

	
	<br>
	<hr>
	
	<slot></slot>
	
	<br>

	{#if data.fm.comments}
		<hr>
		<Comments pageID={data.id} pageTitle={data.fm.title} />
	{/if}

</ArticleLayout>