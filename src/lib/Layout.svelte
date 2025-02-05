<style lang="scss">
	.layout {
		max-width: calc(900px - (32px * 2));
		margin-right: auto;
		margin-left: auto;
		padding-right: 16px;
		padding-left: 16px;
		padding-top: 16px;
	}
	
	.site-title {
		font-family: "franklin_gothicregular", sans-serif;
		font-size: 56px;
		padding-top: 16px;
		margin-bottom: 16px;
		font-weight: 300;
		letter-spacing: -1px;
		margin-bottom: 0;
		vertical-align: top;
	}
</style>

<script lang="ts">

import Background from "$joeysvelte/Background.svelte";
import { listToTagDetails } from "$lib/Tags";
import Tags from "$lib/Tags.svelte";
import Center from "$lib/Center.svelte";

export let bgText: string = "heyjoeway";
export let data: any;

function randomElement(arr: any[]) {
	return arr[Math.round(Math.random() * (arr.length - 1))];
}
let htmlDiceEntities = ["&#x2680;", "&#x2681;", "&#x2682;", "&#x2683;", "&#x2684;", "&#x2685;"];

</script>

<Background>
	<span slot="topLeft">
		{bgText}
	</span>
	<span slot="bottomRight">
		{@html randomElement(htmlDiceEntities)}
	</span>
</Background>

<div class="layout">
	<a class="site-title" rel="author" href="/">
		<span style="color:palevioletred">hey</span><span style="color:orange">joe</span><span style="color:skyblue">way</span><span style="color:white">.</span>
	</a>
	<br>
	
	<slot></slot>
	
	<hr>
	<Center>
		<Tags tags={listToTagDetails(data.categories)} />
	</Center>
	<br>
</div>
