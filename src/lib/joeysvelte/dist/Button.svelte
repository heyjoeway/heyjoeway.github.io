<style>div {
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
}</style>

<script>import Clickable from "./Clickable.svelte";
import { currentTheme } from "./Theming";
export let onClick = void 0;
export let iconSrc = "";
export let color = null;
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