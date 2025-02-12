<script lang="ts">
    import Image from "$lib/Image.svelte";
    import Video from "$lib/Video.svelte";
    import Button from "$joeysvelte/Button.svelte";
	import { formatDateTime } from "$lib/Utils";
    import FeedProfilePic from "./FeedProfilePic.svelte";
    import type { Feed, Post, Media } from "./Feed";

    import Masonry from 'svelte-bricks'
    import PostEmbed from "./PostEmbed.svelte";
    
    export let feed: Feed;
    export let post: Post;
    export let inFeed = false;
    
    function newDateDetail(type: string, key: string) {
        return { type, key };
    }
    
    const knownExtensions = [
        ".png",
        ".jpg",
        ".jpeg",
        ".webp",
        ".gif",
        ".svg",
        ".mp4",
        ".webm"
    ];
    
    const unknownMedia = post.media.filter(
        x => !knownExtensions.includes(x.extension)
    );
</script>

<a href={feed.url}>
    <div class="profile">
        <FeedProfilePic maxHeight="42px" feed={feed} />
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
    <Masonry
        items={post.media}
        getId={(media: Media) => media.id + media.extension}
        let:item={media}
        minColWidth={160}
        maxColWidth={600}
        animate={false}
    >
        {#if media.extension == ".png"}
            {#await import(`../../src/feeds/${feed.id}/${post.id}/${media.id}.png?as=post`) then { default: src }}
                <Image src={src} fullSrc={media.urlGitHub} exif={media.exif} />
            {/await}
        {:else if media.extension == ".jpg"}
            {#await import(`../../src/feeds/${feed.id}/${post.id}/${media.id}.jpg?as=post`) then { default: src }}
                <Image src={src} fullSrc={media.urlGitHub} exif={media.exif} />
            {/await}
        {:else if media.extension == ".jpeg"}
            {#await import(`../../src/feeds/${feed.id}/${post.id}/${media.id}.jpg?as=post`) then { default: src }}
                <Image src={src} fullSrc={media.urlGitHub} exif={media.exif} />
            {/await}
        {:else if media.extension == ".webp"}
            {#await import(`../../src/feeds/${feed.id}/${post.id}/${media.id}.webp?as=post`) then { default: src }}
                <Image src={src} fullSrc={media.urlGitHub} exif={media.exif} />
            {/await}
        {:else if media.extension == ".gif"}
            {#await import(`../../src/feeds/${feed.id}/${post.id}/${media.id}.gif`) then { default: src }}
                <Image src={src} fullSrc={media.urlGitHub} exif={media.exif} />
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
        {/if}
    </Masonry>
    <div>
        {#each post.embeds as embed}
            <PostEmbed {embed} />
        {/each}
        {#if inFeed && unknownMedia.length > 1}
            <br>
            <Button onClick={post.url}>
                +{unknownMedia.length} attachments
            </Button>
        {:else}
            {#each unknownMedia as media}
                <br>
                <a href={media.urlGitHub}>
                    {media.id}{media.extension} (on GitHub)
                </a>
            {/each}
        {/if}
    </div>
</div>
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
    <Button onClick={post.url} linkCopyOnClick={!inFeed}>
        {#if inFeed}
            💬
        {/if}
        🔗
    </Button>
</div>

<style lang="scss">
    .media {
        margin-bottom: 8px;
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