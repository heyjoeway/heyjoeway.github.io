<script lang="ts">
    import type { Feed } from "./Feed";
    import Image from "./Image.svelte";

    export let maxHeight: string;
    export let feed: Feed;
</script>

{#await import(`../../src/feeds/${feed.id}/pfp.jpg?as=run`) then { default: pfpSrc }}
    <Image maxHeight={maxHeight} src={pfpSrc} enableLightbox={false} />
{:catch}
    {#await import(`../../src/feeds/${feed.id}/pfp.jpeg?as=run`) then { default: pfpSrc }}
        <Image maxHeight={maxHeight} src={pfpSrc} enableLightbox={false} />
    {:catch}
        {#await import(`../../src/feeds/${feed.id}/pfp.png?as=run`) then { default: pfpSrc }}
            <Image maxHeight={maxHeight} src={pfpSrc} enableLightbox={false} />
        {:catch}
            <!-- webp goes at the bottom WHERE IT BELONGS -->
            {#await import(`../../src/feeds/${feed.id}/pfp.webp?as=run`) then { default: pfpSrc }}
                <Image maxHeight={maxHeight} src={pfpSrc} enableLightbox={false} />
            {/await}
        {/await}
    {/await}
{/await}