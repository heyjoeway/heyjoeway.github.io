<script lang="ts">
    import Post from "$lib/Post.svelte";
    import Layout from "$lib/Layout.svelte";

    import FeedHeader from "$lib/FeedHeader.svelte";
    
    export let data;
</script>

<Layout>
    {#await import(`../../../../src/feeds/${data.id}/pfp.jpg?as=run`) then { default: pfpSrc }}
        <FeedHeader pfpSrc={pfpSrc} feed={data} />
        
        <div class="outer-container">
            <div class="inner-container">
                <hr>
                
                {#if data.posts}
                    {#each data.posts as post}
                        <Post feed={data} post={post} pfpSrc={pfpSrc} />
                    {/each}
                {/if}
                <hr>
            </div>
        </div>
    {/await}
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