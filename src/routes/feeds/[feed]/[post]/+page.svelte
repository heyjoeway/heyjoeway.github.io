<script lang="ts">
    import Post from "$lib/Post.svelte";
    import Layout from "$lib/Layout.svelte";
    import Comments from "$lib/Comments.svelte";
    
    export let data;
</script>

<Layout bgText={data.feed.id}>
    <div class="outer-container">
        <div class="inner-container">
            <Post post={data.post} />
            <hr>
            <Comments pageID={data.post.url} />
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