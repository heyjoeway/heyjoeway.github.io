<script lang="ts">
    import Layout from "$lib/Layout.svelte";
    import FeedHeader from "$lib/FeedHeader.svelte";
    
    export let data;
</script>

<Layout>
    {#each data.feeds as feed}
        {#if !feed.meta.unlisted}
            <FeedHeader feed={feed} />
            <hr>
        {/if}
    {/each}
</Layout>