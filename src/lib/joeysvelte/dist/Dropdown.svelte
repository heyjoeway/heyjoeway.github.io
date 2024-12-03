<style>div {
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;
  padding: 4px;
  box-sizing: border-box;
}
div select {
  width: 100%;
  border: none;
  padding: 10px 12px;
  border-radius: 24px;
  backdrop-filter: blur(32px);
  box-sizing: border-box;
  color: var(--menu-color);
  background-color: var(--menu-background-color);
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  cursor: pointer;
}
div select:focus {
  outline: none;
}
div select::placeholder {
  color: var(--placeholder-color);
  user-select: none;
}
div .icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}</style>

<script>import { currentTheme } from "./Theming";
import Fa from "svelte-fa";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
export let value = "";
export let onChange;
</script>

<div>
    <select
        bind:value={value}
        on:change={onChange}
        style:color={$currentTheme.text.primary.color}
        style:background-color={$currentTheme.textfield.background.color}
    >
        <slot></slot>
    </select>
    <div class="icon">
        <Fa icon={faChevronDown} />
    </div>
</div>