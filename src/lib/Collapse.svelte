<script lang="ts">
	export let summary: string = "Show more";
	export let open: boolean = false;
</script>

<details {open}>
	<summary>{summary}</summary>
	<div class="content">
		<slot />
	</div>
</details>

<style lang="scss">
	details {
		margin: 8px 0;
		padding: var(--joeysvelte-general-gap-sm, 8px);
		backdrop-filter: blur(var(--joeysvelte-frame-background-blur, 0));
		-webkit-backdrop-filter: blur(var(--joeysvelte-frame-background-blur, 0));
		background: var(--joeysvelte-frame-background-color, transparent);
		border-style: solid;
		border-width: var(--joeysvelte-frame-border-width, 1px);
		border-color: var(--joeysvelte-text-colors-secondary, currentColor);
		border-radius: 4px;
	}

	summary {
		cursor: pointer;
		font-weight: bold;
		user-select: none;
	}

	.content {
		margin-top: var(--joeysvelte-general-gap-sm, 8px);
	}

</style>
