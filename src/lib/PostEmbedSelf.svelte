<script lang="ts">
    import type { EmbedSelf } from './Feed';
    import Post from './Post.svelte';
    import Frame from "$joeysvelte/Frame.svelte"
    
    export let embed: EmbedSelf;
</script>

<Frame>
    <Post post={embed.post} inEmbed={true} />
</Frame>