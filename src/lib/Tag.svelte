<script lang="ts">
	export let url: string = "";
	export let warn: boolean = false;
	
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const classes = [
		warn ? "warn" : ""
	].join(" ");
</script>

{#if url}
	<a href={url} class={classes}>
		<slot />
	</a>
{:else}
	<span on:click={() => dispatch('click')} class={classes}>
		<slot />
	</span>
{/if}


<style lang="scss">
	a, span {
		backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
		-webkit-backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
		background: var(--joeysvelte-frame-background-color);
		border-width: var(--joeysvelte-frame-border-width);
		border-color: var(--joeysvelte-frame-border-color-default);
		color: var(--joeysvelte-text-colors-primary);
		border-style: solid;
		// height: 20px;
		font-size: 14px;
		border-radius: 1em;
		padding: 0.125em 0.6em;
		position: relative;
		box-sizing: border-box;
		display: inline-block;
		
		&.warn {
			background: color-mix(in srgb, var(--joeysvelte-action-colors-warning) 40%, transparent);;
		}
	}
</style>