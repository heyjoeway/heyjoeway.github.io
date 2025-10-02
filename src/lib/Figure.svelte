<style lang="scss">

div {
    margin-top: 8px;
    margin-bottom: 8px;
}

</style>

<script lang="ts">

import FigureHelper from "./_FigureHelper.svelte";

import Frame from "$joeysvelte/Frame.svelte";

export let itemMinWidth = '300px';
export let align: 'left' | 'right' | undefined = undefined;
export let frame: string = "";

</script>

{#if frame}
<div>
	<Frame theme={frame}>
		<FigureHelper hasFrame={true} {itemMinWidth} {align}>
			<slot></slot>
			<slot name="caption"></slot>
		</FigureHelper>
</Frame>
</div>
{:else}
<FigureHelper {itemMinWidth} {align}>
	<slot></slot>
	<slot name="caption"></slot>
</FigureHelper>
{/if}