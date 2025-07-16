<script lang="ts">
	import { onMount } from "svelte";
	import ShiverText from "./ShiverText.svelte";
	
	export let text: string;
	export let spinPeriod: number = 2; // seconds per one full rotation
	export let spinOffsetPerChar: number = 10; // degrees per character
	export let spinMagnitude: number = 5; // pixels of movement per character
	
	let spinAngle = 0;
	
	function getSpinPos(
		spinAngle: number,
		index: number,
		func: (angle: number) => number
	) {
		let spinAngleMod = (
			spinAngle
			+ (
				spinOffsetPerChar
				* index
			)
		) % 360; // Normalize angle to [0, 360)
		return func(spinAngleMod * (Math.PI / 180)) * spinMagnitude;
	}
	
	onMount(() => {
		let stop = false;
		function step(timestamp: number) {
			spinAngle = (timestamp / 1000) * (360 / spinPeriod);
			if (!stop) requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
		return () => { stop = true };
	});
	
	let shutUp = false;
	
	import { inview } from 'svelte-inview';
</script>

{#if shutUp}
	<span
		use:inview
		on:inview_leave={() => { shutUp = false; }}
	>
		<ShiverText text={text} />
	</span>
{:else}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<span
		aria-label={text}
		style:position="relative"
		on:click={() => shutUp = true}
	>
		{#each text.split('') as char, i}
			<span
				style:position="relative"
				style:left={getSpinPos(spinAngle, i, Math.sin) + 'px'}
				style:top={getSpinPos(spinAngle, i, Math.cos) + 'px'}
			>
				{char}
			</span>
		{/each}
	</span>
{/if}
