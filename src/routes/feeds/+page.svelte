<script lang="ts">
    import Layout from "$lib/Layout.svelte";
    import FeedHeader from "$lib/FeedHeader.svelte";
    
    export let data;
</script>

<Layout>
    {#each data.feeds as feed}
        <hr>
        {#await import(`../../../src/feeds/${feed.id}/pfp.jpg?as=run`) then { default: pfpSrc }}
            <a href="./{feed.id}">
                <FeedHeader feed={feed} pfpSrc={pfpSrc} />
            </a>
        {/await}
    {/each}
</Layout>