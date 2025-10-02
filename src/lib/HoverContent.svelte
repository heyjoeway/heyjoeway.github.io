<script lang="ts">
	import Frame from "$joeysvelte/Frame.svelte";
	
	export let text: string = "";
	export let hover: string = "";
	export let minWidth: string = "250px";
</script>

<span aria-label={text} class="text">
	{text}
	<slot />
	<div class="hover">
		<Frame minWidth={minWidth}>
			{hover}
			<slot name="hover" />
		</Frame>
	</div>
</span>

<style lang="scss">
	.hover {
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		visibility: hidden;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.1s;
		
		& > :global(*) {
			font-size: 12px;
		}
	}
	
	@media print {
		.hover {
			display: none !important;
		}
	}
	
	.text {
		position: relative;
		
		&:hover {
			& > .hover {
				visibility: visible;
				pointer-events: auto;
				opacity: 1;
			}
		}
	}
</style>