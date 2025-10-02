<style lang="scss">
	.layout {		
		max-width: 836px;
		margin-right: auto;
		margin-left: auto;
		padding-right: 16px;
		padding-left: 16px;
		padding-top: 16px;
		overflow-x: clip;
	}
	
	@media print {
		.layout {
			max-width: 100%;
			padding: 0;
			margin: 0;
		}
	}
	
	.site-title {
		font-family: "franklin_gothicregular", sans-serif;
		font-size: 32px;
		margin-bottom: 16px;
		font-weight: 300;
		letter-spacing: -1px;
		margin-bottom: 0;
		vertical-align: top;
		display: flex;
		align-items: start;
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
	// Supports weights 100-700
	import '@fontsource-variable/ibm-plex-sans';
	
	import Background from "$joeysvelte/Background.svelte";
	import Button from "$joeysvelte/Button.svelte";
	import ThemeProvider from "$joeysvelte/ThemeProvider.svelte";
	import HideDuringPrint from "$joeysvelte/HideDuringPrint.svelte";
	
	export let bgText: string = "heyjoeway";
	
	function randomElement(arr: any[]) {
		return arr[Math.round(Math.random() * (arr.length - 1))];
	}
	let htmlDiceEntities = ["&#x2680;", "&#x2681;", "&#x2682;", "&#x2683;", "&#x2684;", "&#x2685;"];

</script>

<ThemeProvider>
	<Background>
		<span slot="topLeft">
			{bgText}
		</span>
		<span slot="bottomRight">
			{@html randomElement(htmlDiceEntities)}
		</span>
	</Background>
	
	<div class="layout">
		<HideDuringPrint>
			<div class="header">		
				<div class="title">
					<a class="site-title" rel="author" href="/">
						<span style:color="var(--joeysvelte-brand-colors-1)">hey</span>
						<span style:color="var(--joeysvelte-brand-colors-2)">joe</span>
						<span style:color="var(--joeysvelte-brand-colors-3)">way</span>
						<span style:color="var(--joeysvelte-text-colors-primary)">.</span>
					</a>
				</div>
				<div class="nav">
					<Button onClick="/articles">Articles</Button>
					<Button onClick="/feeds">Feeds</Button>
				</div>
			</div>
		</HideDuringPrint>
		
		<slot></slot>
	</div>
</ThemeProvider>