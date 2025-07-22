<style lang="scss">

@keyframes fade-in {
	from {
		opacity: 0%;
	}
	to {
		opacity: 100%;
	}
}

span {	
	margin-bottom: 8px;
		
	a {
		opacity: 0%;
		animation-name: fade-in;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
		
		backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
		-webkit-backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
		background: var(--joeysvelte-frame-background-color);
		border-width: var(--joeysvelte-frame-border-width);
		border-color: var(--joeysvelte-frame-border-color-default);
		color: var(--joeysvelte-text-colors-primary);
		border-style: solid;
		height: 20px;
		text-transform: lowercase;
		font-size: 11px;
		margin-bottom: 8px;
		margin-right: 8px;
		border-radius: 6px;
		padding: 0px 6px;
		position: relative;
		box-sizing: border-box;
		display: inline-block;
		
		@for $i from 1 through 19 {
			&:nth-child(#{$i}) { animation-delay: #{0.75 + $i * 0.25}s; }
		}
	}
	
	&.center {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
}

</style>

<script lang="ts">
	import { type TagDetails } from '$lib/Tags';
	export let tags: TagDetails[];
	export let center: boolean = false;
</script>

<span class="{center ? 'center' : ''}">
	{#each tags as tag}
		<a href={tag.url}>{tag.name}</a>
	{/each}
</span>