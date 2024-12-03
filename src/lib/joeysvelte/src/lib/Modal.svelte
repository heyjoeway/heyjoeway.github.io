<style lang="scss">
.bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(8px);
}

.outer-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 32px;
    box-sizing: border-box;
    
    scrollbar-color: #111 #000;
}

.inner-container {
    width: 350px;
    margin: auto 8px;
    
    border-style: solid;
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
    
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    
    padding: 16px;
}

h1 {
    margin-top: 0;
    user-select: none;
}

.footer {
    margin-top: 16px;
    text-align: right;
    
    display: flex;
    gap: 16px;
    flex-direction: row;
    justify-content: flex-end;
}

</style>

<script lang="ts">
    import { currentTheme } from './Theming';
    import Overlay from "./Overlay.svelte";
    import ScrollBlocker from './ScrollBlocker.svelte';
    
    import { fade } from 'svelte/transition';
    import { quartOut } from 'svelte/easing';
    
    export let open: boolean = false;
</script>

{#if open}

<ScrollBlocker />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<Overlay>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="bg"
        transition:fade={{
            duration: 500,
            easing: quartOut
        }}
    ></div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="outer-container"
        on:click={() => open = false}
        transition:fade={{
            duration: 100,
            easing: quartOut
        }}
    >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="inner-container"
            style:background-color={$currentTheme.frame.background.color}
            style:border-color={$currentTheme.frame.border.color}
            style:border-width={$currentTheme.frame.border.width}
            style:color={$currentTheme.text.primary.color}
            on:click|stopPropagation
        >
            <h1><slot name="header"></slot></h1>
            <slot name="body"></slot>
            <div class="footer"><slot name="footer"></slot></div>
        </div>
    </div>
</Overlay>

{/if}