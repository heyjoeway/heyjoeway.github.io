<script lang="ts">   
    import type {
        Embed,
        EmbedYoutube,
        EmbedSelf
    } from './Feed';
    import PostEmbedYoutube from './PostEmbedYoutube.svelte';
    import PostEmbedSelf from './PostEmbedSelf.svelte';
    
    export let embed: Embed;
</script>

{#if embed.platform == "youtube"}
    <PostEmbedYoutube embed={embed as EmbedYoutube} />
{:else if embed.platform == "self"}
    <PostEmbedSelf embed={embed as EmbedSelf} />
{/if}