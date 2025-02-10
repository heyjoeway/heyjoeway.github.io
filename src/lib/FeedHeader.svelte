<script lang="ts">
    import type { Feed } from "$lib/Feed";
    
    import Image from "$lib/Image.svelte";
    import Button from "$lib/joeysvelte/dist/Button.svelte";
    import Img from "@zerodevx/svelte-img";
    import { styleObjToStr } from "$lib/Utils.js";
    
    export let pfpSrc;
    export let feed: Feed;
    const bannerStyleStr = styleObjToStr({
        width:"100%",
        height:"150px",
        "object-fit":"cover",
        "border-radius":"8px"
    });
</script>


{#await import(`../../src/feeds/${feed.id}/banner.jpg?as=run`) then { default: bannerSrc }}
    <Img style={bannerStyleStr} src={bannerSrc} />
{:catch}
    {#await import(`../../src/feeds/${feed.id}/banner.jpeg?as=run`) then { default: bannerSrc }}
        <Img style={bannerStyleStr} src={bannerSrc} />
    {:catch}
        {#await import(`../../src/feeds/${feed.id}/banner.png?as=run`) then { default: bannerSrc }}
            <Img style={bannerStyleStr} src={bannerSrc} />
        {:catch}
            <!-- webp goes at the bottom WHERE IT BELONGS -->
            {#await import(`../../src/feeds/${feed.id}/banner.webp?as=run`) then { default: bannerSrc }}
                <Img style={bannerStyleStr} src={bannerSrc} />
            {/await}
        {/await}
    {/await}
{/await}

<div class="outer-container">
    <div class="inner-container">
        <div class="profile">
            <div class="left">
                <Image maxHeight="90px" src={pfpSrc} enableLightbox={false} />
                <div class="title">{feed.meta.title}</div>
                <div class="path">{feed.urlShort}</div>
                <div>{feed.meta.description}</div>
            </div>
            <div class="buttons">
                <Button onClick={feed.rss}>📡 RSS</Button>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
        .profile {
        position: relative;
        margin-bottom: 16px;
        
        .left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            top: -45px;
            margin-bottom: -45px;
            
            .title {
                font-size: 24.375px;
                font-weight: bold;
            }
            
            .path {
                font-size: 15px;
                color: rgba(255,255,255,0.5);
                margin-bottom: 12px;
            }
        }
        
        .buttons {
            position: absolute;
            top: 4px;
            right: 0;
        }
    }
    
    .outer-container {
        display: flex;
        justify-content: center;
    }

    .inner-container {
        width: 100%;
        max-width: 600px;
    }
</style>