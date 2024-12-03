<style>

.bg-element {   
    position: fixed;
    font-size: 350px;
    font-weight: normal;
    user-select: none;
    pointer-events: none;
}

#bg-top-left { 
    position: absolute;
    font-size: calc(min(40vw, 350px));
    top: -7vw;
    left: 0.95vh;
    overflow-x: hidden;
    filter: blur(12px);
    white-space: nowrap;
    text-transform: lowercase;
}

#bg-bottom-right {
    position: absolute;
    font-size: calc(min(92vw, 1000px));
    bottom: -0.5em;
    right: -0.1em;
    filter: blur(12px);
    rotate: z 45deg;
    white-space: nowrap;
    text-transform: lowercase;
}

.bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    z-index: -9999;
    font-family: 'franklin_gothicregular';
}

</style>

<script lang="ts">

import { currentTheme } from "./Theming";

import Animations from "./Animations.js";
const blurFall = Animations.blurFall;

let startAnimation = false;
import { onMount } from 'svelte';
onMount(() => {
    startAnimation = true;
});

</script>

<div
    class="bg"
    style:background-color={$currentTheme.background.color}
    style:background-image="url({$currentTheme.background.image.uri})"
>

    {#if startAnimation}

    <div 
        class="bg-element"
        id="bg-top-left"
        in:blurFall={{
            delay: 250,
            radiusStart: 128,
            radiusEnd: 12,
            duration: 1000
        }}
        style:color={$currentTheme.background.topLeft.color}
    >
        <slot name="topLeft"></slot>
    </div>

    <div
        class="bg-element"
        id="bg-bottom-right"
        in:blurFall|global={{
            delay: 750,
            radiusStart: 128,
            radiusEnd: 12,
            duration: 1000,
            rotateStart: 60,
            rotateEnd: 45
        }}
        style:color={$currentTheme.background.bottomRight.color}
    >
        <slot name="bottomRight"></slot>
    </div>

    {/if}

</div>