<script lang="ts">
    import type { Post } from "./Feed";
    import PostEditor from "./PostEditor.svelte";
    import Button from "$joeysvelte/Button.svelte";
    import Modal from "$joeysvelte/Modal.svelte";
    
    export let post: Post;
    export let open = false;
    
    let modal: Modal;
    let postForm: HTMLFormElement | undefined;
</script>

<Modal bind:this={modal} bind:open={open}>
    <svelte:fragment slot="header">
        Edit Post
    </svelte:fragment>
    <svelte:fragment slot="body">
        <PostEditor {post} bind:postForm={postForm} />
    </svelte:fragment>
    <svelte:fragment slot="footer">
        <Button onClick={() => open = false}>
            Cancel
        </Button>
        <Button onClick={() => postForm?.submit()}>
            📝 Edit
        </Button>
    </svelte:fragment>
</Modal>

