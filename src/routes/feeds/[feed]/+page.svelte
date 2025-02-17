<script lang="ts">
    import { dev } from '$app/environment';

    import Post from "$lib/Post.svelte";
    import Layout from "$lib/Layout.svelte";

    import FeedHeader from "$lib/FeedHeader.svelte";
    import Center from "$lib/Center.svelte";
    import Button from '$joeysvelte/Button.svelte';
    import Textarea from '$joeysvelte/Textarea.svelte';
    import FileUploadMultiple from '$lib/FileUploadMultiple.svelte';
    
    export let data;
    let filePickerFiles: FileList;
    
    function gotAnyFiles() {
        return filePickerFiles && filePickerFiles.length;
    }
    
    let postForm: HTMLFormElement;
</script>

<Layout bgText={data.id}>
    <FeedHeader feed={data} />
    
    <div class="outer-container">
        <div class="inner-container">
            <hr>
            
            {#if dev}
                <form
                    bind:this={postForm}
                    method="POST"
                    enctype="multipart/form-data"
                    action="./new"
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
                <hr>
            {/if}
            
            {#if data.posts && data.posts.length > 0}
                {#each data.posts as post}
                    <Post post={post} inFeed={true} />
                    <hr>
                {/each}
            {:else}
                <Center>
                    No posts!
                </Center>
                <br>
            {/if}
        </div>
    </div>
</Layout>

<style lang="scss">
    .outer-container {
        display: flex;
        justify-content: center;
    }

    .inner-container {
        width: 100%;
        max-width: 600px;
    }
    
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