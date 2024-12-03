<style class="scss">

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
}

</style>

<script lang="ts">

import Image from './Image.svelte';
import { type GalleryDescriptor } from './Gallery';

export let gallery: GalleryDescriptor;

</script>

<h1>{gallery.name}</h1>
<p>{gallery.description}</p>
<div class="gallery">
{#each Object.keys(gallery.images) as key}
<Image src={gallery.thumbs[key]} fullSrc={gallery.images[key]} />
{/each}
</div>