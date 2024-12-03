<!-- https://github.com/sveltejs/svelte/issues/1872#issuecomment-967103728 -->

<script lang="ts">

import { onMount } from 'svelte';

let overlay: Node;

onMount(() => {
    let container = document.getElementById('overlay-container');
    if (!container) {
        container = document.body.appendChild(document.createElement('div'));
        container.id = 'overlay-container';
    }
    container.appendChild(overlay)
});

</script>

<div bind:this={overlay} class="overlay">
    <slot />
</div>