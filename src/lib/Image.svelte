<style lang="scss">

// Nicer placeholder for broken images
div {
    position: relative;
    display: block;
}

.img::after {
    content: "�";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 128px;
    opacity: 25%;
}

div {
  max-width: 100%;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
}

:global(.img) {
    border-radius: 8px;
    width: auto;
    height: auto;
    max-height: var(--img-max-height);
}

</style>

<script lang="ts">

export let src: any;
export let fullSrc: any = undefined;
export let maxHeight: string = "450px";
import Img from '@zerodevx/svelte-img'

let isSVG = false;
if (typeof src === 'string') {
    isSVG = (src
        .split('?')[0]
        .endsWith('.svg')
    );
}

let fullSrcLink = fullSrc;
if (typeof fullSrcLink === 'object') {
    fullSrcLink = fullSrcLink.img.src;
}

</script>

<a href="{fullSrcLink}" target="_blank">
<div style="--img-max-height:{maxHeight}">
{#if isSVG}
    <img class="img" src={src} alt=" " />
{:else}
    <Img
        class="img"
        src={src}
        alt=" "
    />
{/if}
</div>
</a>