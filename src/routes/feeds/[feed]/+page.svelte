<script lang="ts">
    import Post from "$lib/Post.svelte";
    import Layout from "$lib/Layout.svelte";
    import Image from "$lib/Image.svelte";
    import Button from "$lib/joeysvelte/dist/Button.svelte";
    
    import Img from "@zerodevx/svelte-img";
    
    export let data;
    
    // https://stackoverflow.com/a/45205645
    function styleObjToStr(obj: Record<string, any>) {
        return Object.entries(obj).map(([k, v]) => `${k}:${v}`).join(';')
    }
</script>

<Layout data={data}>
    {#await import(`/src/feeds/${data.id}/banner.webp?as=run`) then { default: bannerSrc }}
    <Img
        style={styleObjToStr({
            width:"100%",
            height:"150px",
            "object-fit":"cover",
            "border-radius":"8px"
        })}
        src={bannerSrc}
    />
    
    {/await}
    <div class="outer-container">
        <div class="inner-container">
            {#await import(`/src/feeds/${data.id}/pfp.jpg?as=run`) then { default: pfpSrc }}
                <div class="profile">
                    <div class="left">
                        <Image maxHeight="90px" src={pfpSrc} enableLightbox={false} />
                        <div class="title">{data.meta.title}</div>
                        <div class="path">{data.urlShort}</div>
                        <div>{data.meta.description}</div>
                    </div>
                    <div class="buttons">
                        <Button onClick="./rss">📡 RSS</Button>
                    </div>
                </div>
                
                <hr>
                
                {#each data.posts as post}
                    <Post feed={data} post={post} pfpSrc={pfpSrc} />
                {/each}
            {/await}
            <hr>
        </div>
    </div>
</Layout>

<style lang="scss">
    .profile {
        position: relative;
        margin-bottom: 16px;
        
        .left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            top: -32px;
            margin-bottom: -32px;
            
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