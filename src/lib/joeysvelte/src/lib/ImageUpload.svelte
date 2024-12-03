<style lang="scss">
div {
    display: flex;
    flex-direction: column;
    
    label {
        margin-left: 12px;
        margin-bottom: 4px;
        user-select: none  ;
    }
    
    div {
        span {
            flex: 1;
            vertical-align: middle;
            
            display: flex;
            align-items: center;
        }
        
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        gap: 8px;
        box-sizing: border-box;
    }
}

</style>

<script lang="ts">

import Fa from "svelte-fa";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { currentTheme } from "./Theming";
import Button from "./Button.svelte";
import type { ImageUploadFile } from "./ImageUpload.ts";

export let value: ImageUploadFile;
export let label: string = "";

function onFileChange(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            value = {
                name: file.name,
                uri: reader.result as string
            };
        };
        reader.readAsDataURL(file);
    }
}

function clear() {
    value = {} as ImageUploadFile;
}

</script>
<div>
    {#if label}
        <label for={label}
            style:color={$currentTheme.text.secondary.color}
        >
            {label}
        </label>
    {/if}
    {#if value.uri}
        <div>
            <span>{value.name}</span>
            <Button onClick={clear}>
                <Fa icon={faTrash} />
            </Button>
        </div>
    {:else}
        <input type="file" accept="image/*" on:change={onFileChange} />
    {/if}
</div>
