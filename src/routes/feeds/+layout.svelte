<style lang="scss">
    .media {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
        gap: 1rem;
    }
    
    .outer-container {
        display: flex;
        justify-content: center;
    }
    
    .inner-container {
        width: 100%;
        max-width: 600px;
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
    
    .timestamps {
        font-size: 13px;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 8px;
    }
</style>

<script lang="ts">
    import Layout from "$lib/Layout.svelte";
    import Comments from "$lib/Comments.svelte";
    import Image from "$lib/Image.svelte";
    import Video from "$lib/Video.svelte";
    import Button from "$lib/joeysvelte/dist/Button.svelte";
    
	import { formatDateTime } from "$lib/Utils";
    
    export let data;
    
    function newDateDetail(type: string, key: string) {
        return { type, key };
    }
</script>

<Layout data={data}>
    <div class="outer-container">
        <div class="inner-container">
            {#each data.feeds as feed}
                {#each feed.posts as post}
                    <a href={feed.urlShort}>
                        <div class="profile">
                            {#await import(`./${feed.id}/pfp.jpg?as=run`) then { default: src }}
                                <Image maxHeight="42px" src={src} enableLightbox={false} />
                            {/await}
                            <div>
                                <div class="title">{feed.title}</div>
                                <div class="path">{feed.urlShort}</div>
                            </div>
                        </div>
                    </a>
                                
                    {#if !post.isEmpty}
                        <p class="post">
                            <slot></slot>
                        </p>                
                    {/if}

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
                    
                    <br>
                    
                    <div class="media">
                        {#each post.media as media}
                            {#if media.extension == ".png"}
                                {#await import(`./${feed.id}/${post.id}/${media.id}.png?as=post`) then { default: src }}
                                    <Image src={src} fullSrc={media.urlGitHub} />
                                {/await}
                            {:else if media.extension == ".jpg"}
                                {#await import(`./${feed.id}/${post.id}/${media.id}.jpg?as=post`) then { default: src }}
                                    <Image src={src} fullSrc={media.urlGitHub} />
                                {/await}
                            {:else if media.extension == ".jpeg"}
                                {#await import(`./${feed.id}/${post.id}/${media.id}.jpg?as=post`) then { default: src }}
                                    <Image src={src} fullSrc={media.urlGitHub} />
                                {/await}
                            {:else if media.extension == ".webp"}
                                {#await import(`./${feed.id}/${post.id}/${media.id}.webp?as=post`) then { default: src }}
                                    <Image src={src} fullSrc={media.urlGitHub} />
                                {/await}
                            {:else if media.extension == ".gif"}
                                {#await import(`./${feed.id}/${post.id}/${media.id}.gif`) then { default: src }}
                                    <Image src={src} fullSrc={media.urlGitHub} />
                                {/await}
                            {:else if media.extension == ".svg"}
                                {#await import(`./${feed.id}/${post.id}/${media.id}.svg`) then { default: src }}
                                    <Image src={src} fullSrc={media.urlGitHub} />
                                {/await}
                            {:else if media.extension == ".mp4"}
                                {#await import(`./${feed.id}/${post.id}/${media.id}.mp4`) then { default: src }}
                                    <Video src={src} gifMode={false} />
                                {/await}
                            {:else if media.extension == ".webm"}
                                {#await import(`./${feed.id}/${post.id}/${media.id}.webm`) then { default: src }}
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
                    <Comments pageID={post.idFull} pageTitle={post.idFull} />
                {/each}
            {/each}
        </div>
    </div>
</Layout>