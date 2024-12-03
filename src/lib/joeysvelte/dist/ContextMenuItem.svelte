<style>div {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
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
</script>

<Clickable width='100%' height='24px' onClick={onClick}>
    <div style:color={$currentTheme.text.primary.color}>
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={iconSrc} />
        <slot />
    </div>
</Clickable>
    