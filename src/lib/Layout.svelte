<style lang="scss">
	.layout {
		max-width: 836px;
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
		
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;
	}
	
	.nav {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: right;
		gap: 8px;
	}
</style>

<script lang="ts">
	import Background from "$joeysvelte/Background.svelte";
	import Button from "$joeysvelte/Button.svelte";
	
	export let bgText: string = "heyjoeway";
	
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
	<div class="header">		
		<div class="title">
			<a class="site-title" rel="author" href="/">
				<span style="color:palevioletred">hey</span><span style="color:orange">joe</span><span style="color:skyblue">way</span><span style="color:white">.</span>
			</a>
		</div>
		<div class="nav">
			<Button onClick="/articles">Articles</Button>
			<Button onClick="/feeds">Feeds</Button>
		</div>
	</div>
	
	<slot></slot>
</div>
