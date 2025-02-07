<script lang="ts">
    import clsx from 'clsx';
    
    import Overlay from "$joeysvelte/Overlay.svelte";
    import Button from "$joeysvelte/Button.svelte";
    
    export let src: any;
    export let fullSrc: any = undefined;
    export let maxHeight: string = "450px";
    export let enableLightbox = true;
    export let square = false;
    import Img from "@zerodevx/svelte-img";
    
    let skipSvelteImg = false;
    let nearestScaling = false;
    if (typeof src === "string") {
        let isGif = src.split("?")[0].endsWith(".gif")
        let isSvg = src.split("?")[0].endsWith(".svg")
        skipSvelteImg = isGif || isSvg;
        nearestScaling = isGif;
    }

    let fullSrcLink = fullSrc || src;
    if (typeof fullSrcLink === "object") {
        fullSrcLink = fullSrcLink.img.src;
    }
    
    let overlayOpen = false;
    
    const classes = {
        img: true,
        clickable: enableLightbox,
        square: square
    }
</script>

<!-- <a href={fullSrcLink} target="_blank"> -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
    style="--img-max-height:{maxHeight}"
    on:click={() => {overlayOpen = true}}
>
    {#if skipSvelteImg}
        <img
            class={clsx(classes)}
            {src}
            alt=" "
            style={nearestScaling ? "image-rendering: pixelated;" : ""}
        />
    {:else}
        <Img
            class={clsx(classes)}
            {src}
            alt=" "
        />
    {/if}
</div>

{#if enableLightbox}
    <Overlay bind:open={overlayOpen}>
        <div class="full-src-link">
            <Button onClick={fullSrcLink}>
                🔗 Open Full Image
            </Button>
        </div>
        
        {#if skipSvelteImg}
            <img
                class="img"
                {src}
                alt=" "
                style={nearestScaling ? "image-rendering: pixelated;" : ""}
            />
        {:else}
            <Img class="img" {src} alt=" " />
        {/if}
    </Overlay>
{/if}

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
        align-self: center;
    }
    
    :global(.square) {
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }
    
    .clickable {
        cursor: pointer;
    }
    
    .full-src-link {
        position: fixed;
        top: 0;
        right: 0;
    }
</style>
