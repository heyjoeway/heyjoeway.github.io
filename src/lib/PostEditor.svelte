<script lang="ts">
    import ContextMenu from "$joeysvelte/ContextMenu.svelte";
    import ContextMenuItem from "$joeysvelte/ContextMenuItem.svelte";
    import Button from '$joeysvelte/Button.svelte';
    import Textarea from '$joeysvelte/Textarea.svelte';
    import FileUploadMultiple from '$lib/FileUploadMultiple.svelte';
    import type { Feed, Post } from '$lib/Feed';
    import { editFrontmatter } from "./Utils";
        
    function gotAnyFiles() {
        return filePickerFiles && filePickerFiles.length;
    }
    
    export let postForm: HTMLFormElement | undefined = undefined;
    
    export let feed: Feed | undefined = undefined;
    export let post: Post | undefined = undefined;
    
    let text: string = post?.raw || "";
    
    const isEditing = !!post;
    
    const action = (
        isEditing
        ? post?.url + "/edit"
        : feed?.url + "/new"
    );
    
    let filePickerFiles: FileList;
    
    let menu: ContextMenu;
    
    function quickAction(key: string, value: any = true) {
        text = editFrontmatter(text, { [key]: value });
        menu.close();
    }
</script>

<ContextMenu bind:this={menu}>
    <ContextMenuItem onClick={() => quickAction("pinned")}>
        Pin
    </ContextMenuItem>
    <ContextMenuItem onClick={() => quickAction("hideHome")}>
        Hide from Homepage
    </ContextMenuItem>
    <ContextMenuItem onClick={() => quickAction("unlisted")}>
        Make unlisted
    </ContextMenuItem>
</ContextMenu>

<form
    bind:this={postForm}
    method="POST"
    enctype="multipart/form-data"
    {action}
>
    <div style:position="relative">
        <Textarea
            name="text"
            rows={5}
            width="100%"
            bind:value={text}
        />
        {#if !isEditing}
            <div class="posting-footer {gotAnyFiles() ? 'open' : ''}">
                <FileUploadMultiple name="files" bind:files={filePickerFiles} />
                <div class="buttons">
                    <Button onClick={menu?.open}>
                        🧾 Quick Actions
                    </Button>
                    <Button onClick={() => postForm?.submit()}>
                        📝 Post
                    </Button>
                </div>
            </div>
        {:else}
            <div class="posting-overlay">
                <Button onClick={menu?.open}>
                    🧾
                </Button>
            </div>
        {/if}
    </div>
</form>

<style lang="scss">
    .posting-overlay {
        position: absolute;
        right: var(--joeysvelte-general-gap-sm);
        bottom: var(--joeysvelte-general-gap-sm);
    }
    
    .posting-footer {
        display:flex;
        justify-content: space-between;
        margin-bottom: var(--joeysvelte-general-gap-sm);
        flex-wrap: wrap;
        
        &.open {
            flex-direction: column;
        }
        
        .buttons {
            display:flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px;
        }
    }
</style>