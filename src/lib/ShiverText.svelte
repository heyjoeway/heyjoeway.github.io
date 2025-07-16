<script lang="ts">
	import { onMount } from "svelte";
	
	export let text: string;
	export let shiverDuration: number = 1; // seconds till the shiver ends
	export let shiverMagnitude: number = 6; // pixels of random movement
	
	let shiverAmt = 0;
		
	onMount(() => {
		let stop = false;
		let start = performance.now();
		function step(timestamp: number) {
			shiverAmt = Math.max(0, (shiverDuration - (timestamp - start) / 1000));
			if (!stop) requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
		return () => { stop = true };
	});
</script>

<span aria-label={text} style:position="relative">
	{#each text.split('') as char, i}
		<span
			style:position="relative"
			style:left={(Math.random() * shiverAmt * shiverMagnitude) + 'px'}
			style:top={(Math.random() * shiverAmt * shiverMagnitude) + 'px'}
		>
			{char}
		</span>
	{/each}
</span>