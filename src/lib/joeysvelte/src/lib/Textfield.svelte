<style lang="scss">

div {
    display: flex;
    flex-direction: column;
    
    label {
        margin-left: 12px;
        margin-bottom: 4px;
        user-select: none  ;
    }
    
    input {
        width: 100%;
        border: none;
        padding: 10px 12px;
        border-radius: 24px;
        backdrop-filter: blur(32px);
        box-sizing: border-box;
        
        &:focus {
            outline: none;
        }
        
        &::placeholder {
            color: var(--placeholder-color);
            user-select: none;
        }
    }
}


</style>

<script lang="ts">

import { currentTheme } from "./Theming";

export let value: string = "";
export let label: string = "";
export let placeholder: string = "";
export let autofocus: boolean = false;

export let onInput: (event: Event) => void = () => {};
export let onKeydown: (event: KeyboardEvent) => void = () => {};

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
