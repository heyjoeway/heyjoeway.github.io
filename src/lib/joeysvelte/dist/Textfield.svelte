<style>div {
  display: flex;
  flex-direction: column;
}
div label {
  margin-left: 12px;
  margin-bottom: 4px;
  user-select: none;
}
div input {
  width: 100%;
  border: none;
  padding: 10px 12px;
  border-radius: 24px;
  backdrop-filter: blur(32px);
  box-sizing: border-box;
}
div input:focus {
  outline: none;
}
div input::placeholder {
  color: var(--placeholder-color);
  user-select: none;
}</style>

<script>import { currentTheme } from "./Theming";
export let value = "";
export let label = "";
export let placeholder = "";
export let autofocus = false;
export let onInput = () => {
};
export let onKeydown = () => {
};
</script>

<div>
    {#if label}
        <label for={label}
            style:color={$currentTheme.text.secondary.color}
        >
            {label}
        </label>
    {/if}
    <!-- svelte-ignore a11y-autofocus -->
    <input
        name={label}
        type="text"
        placeholder={placeholder}
        autofocus={autofocus}
        style="--placeholder-color: {$currentTheme.text.secondary.color}"
        style:color={$currentTheme.text.primary.color}
        style:background-color={$currentTheme.textfield.background.color}
        bind:value={value}
        on:input={onInput}
        on:keydown={onKeydown}
    />
</div>
