<style lang="scss">	
	.header-container {
		display: flex;
		justify-content: space-between;
		gap: 8px;
		
		h1 {
			margin-top: 0;
		}
	}
	
	.article-content {
		:global(a) {
			&::before {
				content: "🔗";
			}
			
		}
	}

	
	.times { 
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
		vertical-align: middle;;
	}
	
	.left {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.right { 
		flex-shrink: 0;

		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	h1 {
		padding-top: 0;
	}
</style>

<script lang="ts">
	import { formatDate } from "$lib/Utils";
	import Tags from "$lib/Tags.svelte";
	import ArticleLayout from "$lib/ArticleLayout.svelte";
	import { strToTagDetails } from "$lib/Tags";
	import Comments from "$lib/Comments.svelte";
	import Image from "$lib/Image.svelte";

	import imgSlop from "./slopadvisory.png?as=run";
	
	export let data;
	
	console.log(data);
	
	const bgText = data.fm.bgText ? data.fm.bgText : data.fm.title;
	
	const dateDetails = [
		{ date: data.fm.date, type: "Published" },
		{ date: data.fm.last_modified_at, type: "Last modified" }
	];
	
</script>

<ArticleLayout data={data} bgText={bgText}>
	<div class="header-container">
		<div class="left">
			<h1>{data.fm.title}</h1>
			<Tags tags={strToTagDetails(data.fm.categories)}></Tags>
		</div>
		<div class="right">
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
			{#if data.fm.categories?.includes("ai")}
				<Image
					src={imgSlop}
					maxHeight="60px"
					alt="Slop Advisory: Artificial Content"
					hAlign="center"
				/>
			{/if}
		</div>
	</div>
	
	<hr>
	
	<span class="article-content">
		<slot></slot>
	</span>
	
	<br>

	{#if data.fm.comments}
		<hr>
		<Comments pageID={data.id} />
	{/if}

</ArticleLayout>