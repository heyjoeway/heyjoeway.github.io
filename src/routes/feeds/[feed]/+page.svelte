<script lang="ts">
    import { dev } from '$app/environment';

    import Post from "$lib/Post.svelte";
    import Layout from "$lib/Layout.svelte";

    import FeedHeader from "$lib/FeedHeader.svelte";
    import Center from "$lib/Center.svelte";

    import PostEditor from '$lib/PostEditor.svelte';
    
    export let data;

    
</script>

<Layout bgText={data.id}>
    <FeedHeader feed={data} />
    
    <div class="outer-container">
        <div class="inner-container">
            <hr>
            
            {#if dev}
                <PostEditor feed={data} />
                <hr>
            {/if}
            
            {#if data.posts && data.posts.length > 0}
                {#each data.posts as post}
                    {#if !post.fm?.unlisted}
                        <Post post={post} inFeed={true} />
                        <hr>
                    {/if}
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
    
</style>