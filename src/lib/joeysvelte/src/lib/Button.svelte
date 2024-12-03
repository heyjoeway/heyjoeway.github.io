<style lang="scss">

div {
    padding: 8px;
    display: flex;
    align-items: center;
    flex-direction: row;
}

img {
    width: 24px;
    height: 24px;
    margin-right: 4px;
    user-select: none;
}
img:not([src]) {
    visibility: hidden;
}

</style>

<script lang="ts">
    import Clickable from "./Clickable.svelte";
    import { currentTheme } from "./Theming";
    
    export let onClick: ((event: MouseEvent) => void) | string | undefined = undefined;
    export let iconSrc: string = "";
    
    export let color: string | null = null;
</script>

<Clickable height='32px' onClick={onClick}>
    <div style:color={color || $currentTheme.text.primary.color}>
        <!-- svelte-ignore a11y-missing-attribute -->
        {#if iconSrc}
            <img src={iconSrc} />
        {/if}
        <slot />
    </div>
</Clickable>