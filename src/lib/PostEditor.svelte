<script lang="ts">
    import Button from '$joeysvelte/Button.svelte';
    import Textarea from '$joeysvelte/Textarea.svelte';
    import FileUploadMultiple from '$lib/FileUploadMultiple.svelte';
    import type { Feed } from '$lib/Feed';
    
    let filePickerFiles: FileList;
    
    function gotAnyFiles() {
        return filePickerFiles && filePickerFiles.length;
    }
    
    let postForm: HTMLFormElement;
    
    export let feed: Feed
</script>

<form
    bind:this={postForm}
    method="POST"
    enctype="multipart/form-data"
    action={feed.url + "/new"}
>
    <Textarea
        name="text"
        rows={5}
        width="100%"
    />
    <div class="posting-footer {gotAnyFiles() ? 'open' : ''}">
        <FileUploadMultiple name="files" bind:files={filePickerFiles} />
        <Button onClick={() => postForm.submit()}>📝 Post</Button>
    </div>
</form>

<style lang="scss">
    .posting-footer {
        display:flex;
        justify-content: space-between;
        margin-top: 8px;
        margin-bottom: 8px;
        flex-wrap: wrap;
        
        &.open {
            flex-direction: column;
        }
    }
</style>