<script lang="ts">
    import Image from "$lib/Image.svelte";
    import Video from "$lib/Video.svelte";
    import Button from "$lib/joeysvelte/dist/Button.svelte";
	import { formatDateTime } from "$lib/Utils";
    
    export let feed;
    export let post;
    export let pfpSrc;
    
    function newDateDetail(type: string, key: string) {
        return { type, key };
    }
</script>


<a href={feed.url}>
    <div class="profile">
        <Image maxHeight="42px" src={pfpSrc} enableLightbox={false} />
        <div>
            <div class="title">{feed.meta.title}</div>
            <div class="path">{feed.urlShort}</div>
        </div>
    </div>
</a>
            
<div class="post">
    {@html post.html}
</div>                

<div class="media">
    {#each post.media as media}
        {#if media.extension == ".png"}
            {#await import(`../../src/feeds/${feed.id}/${post.id}/${media.id}.png?as=post`) then { default: src }}
                <Image src={src} fullSrc={media.urlGitHub} />
            {/await}
        {:else if media.extension == ".jpg"}
            {#await import(`../../src/feeds/${feed.id}/${post.id}/${media.id}.jpg?as=post`) then { default: src }}
                <Image src={src} fullSrc={media.urlGitHub} />
            {/await}
        {:else if media.extension == ".jpeg"}
            {#await import(`../../src/feeds/${feed.id}/${post.id}/${media.id}.jpg?as=post`) then { default: src }}
                <Image src={src} fullSrc={media.urlGitHub} />
            {/await}
        {:else if media.extension == ".webp"}
            {#await import(`../../src/feeds/${feed.id}/${post.id}/${media.id}.webp?as=post`) then { default: src }}
                <Image src={src} fullSrc={media.urlGitHub} />
            {/await}
        {:else if media.extension == ".gif"}
            {#await import(`../../src/feeds/${feed.id}/${post.id}/${media.id}.gif`) then { default: src }}
                <Image src={src} fullSrc={media.urlGitHub} />
            {/await}
        {:else if media.extension == ".svg"}
            {#await import(`../../src/feeds/${feed.id}/${post.id}/${media.id}.svg`) then { default: src }}
                <Image src={src} fullSrc={media.urlGitHub} />
            {/await}
        {:else if media.extension == ".mp4"}
            {#await import(`../../src/feeds/${feed.id}/${post.id}/${media.id}.mp4`) then { default: src }}
                <Video src={src} gifMode={false} />
            {/await}
        {:else if media.extension == ".webm"}
            {#await import(`../../src/feeds/${feed.id}/${post.id}/${media.id}.webm`) then { default: src }}
                <Video src={src} gifMode={false} />
            {/await}
        {:else}
            <Button onClick={media.urlGitHub}>
                View {media.id}{media.extension} on GitHub
            </Button>
        {/if}
    {/each}
</div>
<br>
<div class="footer">
    <div class="timestamps">
        {#each [
            newDateDetail("Posted", "date"),
            newDateDetail("Edited", "last_modified_at")
        ] as dateDetail}
            {#if post.fm[dateDetail.key]}
                <time class="dt" datetime={post.fm[dateDetail.key]} itemprop="datePublished">
                    {dateDetail.type} {formatDateTime(post.fm[dateDetail.key])}
                </time>
                <br>
            {/if}
        {/each}
    </div>
    <Button onClick={post.url}>🔗</Button>
</div>

<style lang="scss">
    .media {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
        gap: 1rem;
    }
    
    .profile {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-top: 0.5rem;
        margin-bottom: 0.75rem;
        font-size: 16.875px;
        
        .title {
            color: white;
        }
        
        .path {
            color: grey;
            font-size: 15px;
        }
    }
    
    .post {
        font-size: 18.75px;
    }
    
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        
        .timestamps {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.5);
        }
    }
    
</style>