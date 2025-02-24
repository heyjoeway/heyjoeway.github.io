<script lang="ts">
    import Modal from "$joeysvelte/Modal.svelte";
    import { default as SV$Post } from "$lib/Post.svelte";
    import type { Post } from "$lib/Feed";
    import Button from "$joeysvelte/Button.svelte";
    
    export let post: Post;
    export let open: boolean = false;
    
    function getPostUrl() {
        return (new URL(post.url, location.href)).href + "/";
    }
    
    let deleteRunning = false;
    let error: string | undefined = undefined;
    let modal: Modal;
    
    async function onDelete() {
        deleteRunning = true;
        fetch(new URL("./delete", getPostUrl()), {
            method: 'DELETE'
        })
        .then(async (response: Response) => {
            if (!response.ok) {
                throw new Error(
                    `${response.status}: ${await response.text()}`
                );
            }
            location.replace(`/feeds/${post.feed.id}`);
        })
        .catch(e => {
            deleteRunning = false;
            error = `There was a problem with the delete request: ${e}`;
        });
        
    }
</script>

<Modal bind:this={modal} bind:open={open}>
    <svelte:fragment slot="header">
        Delete Post
    </svelte:fragment>
    <svelte:fragment slot="body">
        <p>Are you sure you want to delete this post?</p>
        <code>
            {getPostUrl()}
        </code>
        <SV$Post post={post} inModal={true} />
        {#if error}
            <code style="color:red">
                {error}
            </code>
        {/if}
    </svelte:fragment>
    <svelte:fragment slot="footer">
        {#if deleteRunning}
            Deleting...
        {:else}
            <Button onClick={() => open = false}>
                Cancel
            </Button>
            <Button onClick={onDelete} color="red">
                Delete
            </Button>
        {/if}
    </svelte:fragment>
</Modal>

<style lang="scss">
    code {
        overflow-wrap: anywhere;
        font-size: 12px;
    }
</style>