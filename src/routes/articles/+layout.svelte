<style lang="scss">
	.post-meta-inline {
		color: #DDD;
		margin-top: 8px;
		margin-bottom: 16px;
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
	import Layout from "$lib/Layout.svelte";
	import { strToTagDetails } from "$lib/Tags";
	
	export let data;
	
	const bgText = data.fm.bgText ? data.fm.bgText : data.fm.title;
</script>

<Layout data={data} bgText={bgText}>
	<h1>{data.fm.title}</h1>

	<div class="post-meta-inline">
		<time class="dt-published" datetime="{data.fm.date}" itemprop="datePublished">
			{formatDate(data.fm.date)}
		</time>
		<Tags tags={strToTagDetails(data.fm.categories)}></Tags>
	</div>
	
	<slot></slot>
</Layout>