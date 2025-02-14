<script lang="ts">
    import Layout from "$lib/Layout.svelte";
    import FeedHeader from "$lib/FeedHeader.svelte";
    
    export let data;
</script>

<Layout>
    {#each data.feeds as feed}
        <FeedHeader feed={feed} />
        <hr>
    {/each}
</Layout>