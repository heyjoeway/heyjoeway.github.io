<script lang="ts">
    import Post from "$lib/Post.svelte";
    import Layout from "$lib/Layout.svelte";
    
    export let data;
</script>

<Layout>
    {#await import(`../../../../../src/feeds/${data.feed.id}/pfp.jpg?as=run`) then { default: pfpSrc }}
        <div class="outer-container">
            <div class="inner-container">                
                <Post feed={data.feed} post={data.post} pfpSrc={pfpSrc} />
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