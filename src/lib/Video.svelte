<script lang="ts">

export let src: string;
export let maxHeight: string = "450px";
export let gifMode: boolean = true;

</script>

<style lang="scss">

// Nicer placeholder for broken images
div {
    position: relative;
    display: block;
}

video::after {
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

video {
    border-radius: 8px;
    height: 100%;
    // width: 100%;
    // object-fit: contain;
}
    
</style>

<div>
    {#if gifMode}
        <video
            muted
            autoplay
            loop
            playsinline
            style:max-height={maxHeight}
            oncanplay={() => this.muted=true}
        >
            <source src={src} type="video/mp4">
            Your browser does not support the video tag.
        </video>
    {:else}
        <!-- svelte-ignore a11y_media_has_caption -->
        <video
            controls
            playsinline
            style:max-height={maxHeight}
        >
            <source src={src} type="video/mp4">
            Your browser does not support the video tag.
        </video>
    {/if}
</div>
