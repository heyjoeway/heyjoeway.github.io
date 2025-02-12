<script lang="ts">
    import Post from "$lib/Post.svelte";
    import Layout from "$lib/Layout.svelte";

    import FeedHeader from "$lib/FeedHeader.svelte";
    import Center from "$lib/Center.svelte";
    
    export let data;
</script>

<Layout>
    <FeedHeader feed={data} />
    
    <div class="outer-container">
        <div class="inner-container">
            <hr>
            
            {#if data.posts && data.posts.length > 0}
                {#each data.posts as post}
                    <Post feed={data} post={post} inFeed={true} />
                {/each}
            {:else}
                <Center>
                    No posts!
                </Center>
                <br>
            {/if}
            <hr>
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