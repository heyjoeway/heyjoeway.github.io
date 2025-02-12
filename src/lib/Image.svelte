<script lang="ts">
    import clsx from 'clsx';
    
    import Overlay from "$joeysvelte/Overlay.svelte";
    import Button from "$joeysvelte/Button.svelte";
    
    export let src: any;
    export let fullSrc: any = undefined;
    export let maxHeight: string = "450px";
    export let enableLightbox = true;
    export let square = false;
    export let exif: ExifReader.Tags | undefined = undefined;
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
    
    const exifSoftware = exif?.Software?.description || "";
    let showExifSoftware = exifSoftware.length > 0;
    if (showExifSoftware && !isNaN(parseInt(exifSoftware[0]))) {
        showExifSoftware = false;
    }
    
    let exifISO = exif?.ISOSpeedRatings?.description;
    if (exifISO) exifISO = "ISO " + exifISO;
    const exifSettings = ([
        exif?.FNumber?.description,
        exif?.ShutterSpeedValue?.description,
        exifISO
    ]).filter(x => x);
    const exifString = exifSettings.join(", ")
    
    let exifOpen = false;
    
    $: {
        if (!overlayOpen) exifOpen = false;
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
                class="img img-lightbox"
                {src}
                alt=" "
                style={nearestScaling ? "image-rendering: pixelated;" : ""}
            />
        {:else}
            <Img class="img img-lightbox" {src} alt=" " />
        {/if}
        
        {#if exif}
            <div class="overlay-exif">
                {#if exifOpen}
                    🖵 (Original: {exif["Image Height"]?.value}x{exif["Image Width"]?.value} {exif["Bits Per Sample"]?.value}bpp)<br>
                    {#if exif.Make?.description || exif.Model?.description}
                        📷 {exif.Make?.description} {exif.Model?.description}<br>
                    {/if}
                    {#if exif.Lens?.description}
                        🔎 {exif.Lens?.description}<br>
                    {/if}
                    {#if exifString}
                        ⚙️ {exifString}<br>
                    {/if}
                    {#if exif.Flash?.description}
                        ⚡ {exif.Flash?.description}<br>
                    {/if}
                    {#if showExifSoftware}
                        🖌️ Edited with {exif.Software?.description}
                    {/if}
                {:else}
                    <Button onClick={() => exifOpen = true}>ℹ️</Button>
                {/if}
            </div>
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
    
    :global(.img-lightbox) {
        max-height: 100% !important;
    }
    
    :global(.overlay-exif) {
        position: fixed !important;
        left: 16px;
        bottom: 16px;
    }
</style>
