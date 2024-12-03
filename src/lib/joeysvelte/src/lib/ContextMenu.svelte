<style lang="scss">

div {
    min-width: 200px;
    position: absolute;

    border-style: solid;
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
    
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    
    padding: 8px 0;
}

</style>

<script lang="ts">
    
import { currentTheme } from './Theming';

import { clickoutside } from '@svelte-put/clickoutside';
import { fade } from 'svelte/transition';

import Overlay from "./Overlay.svelte";

export let open: boolean = false;

export let x, y: number;

</script>

{#if open}
    <Overlay>
        <div
            transition:fade={{ duration: 100 }}
            use:clickoutside={{ event: 'mousedown' }}
            on:clickoutside={() => open = false}
            style:background-color={$currentTheme.frame.background.color}
            style:border-color={$currentTheme.frame.border.color}
            style:border-width={$currentTheme.frame.border.width}
            style:top="{y}px"
            style:left="{x}px"
        >
            <slot />
        </div>
    </Overlay>
{/if}