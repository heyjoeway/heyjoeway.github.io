<style lang="scss">

div {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    // padding: 4px;
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
</script>

<Clickable width='100%' height='24px' onClick={onClick}>
    <div style:color={$currentTheme.text.primary.color}>
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={iconSrc} />
        <slot />
    </div>
</Clickable>
    