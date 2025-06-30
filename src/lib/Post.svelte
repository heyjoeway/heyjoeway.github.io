<script lang="ts">
    import { dev } from '$app/environment';
    
    import Image from "$lib/Image.svelte";
    import Video from "$lib/Video.svelte";
    import Button from "$joeysvelte/Button.svelte";
    import ContextMenu from "$joeysvelte/ContextMenu.svelte";
    import ContextMenuItem from "$joeysvelte/ContextMenuItem.svelte";
	import { formatDateTime } from "$lib/Utils";
    import FeedProfilePic from "./FeedProfilePic.svelte";
    import type { Post, Media } from "./Feed";
    import ModalPostDelete from './ModalPostDelete.svelte';

    import Masonry from 'svelte-bricks'
    import PostEmbed from "./PostEmbed.svelte";
    import ModalPostEdit from './ModalPostEdit.svelte';
    
    export let post: Post;
    export let inModal = false;
    export let inFeed = false;
    export let inEmbed = inModal;
    
    let inPost = !inEmbed && !inFeed;
    
    let postHtmlNeedsShortening = (
        !inPost
        && (post.html.length > 350)
    );
    
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
    
    let media = post.media;
    const unknownMedia = media.filter(
        x => !knownExtensions.includes(x.extension)
    );
    media = media.filter(
        x => knownExtensions.includes(x.extension)
    );
    
    let mediaNeedsShortening = (
        !inPost
        && (media.length > 4)
    );
    const mediaCountOverMax = media.length - 4;
    if (mediaNeedsShortening) {
        media = media.slice(0, 4);
    }
    
    let embedsNeedsShortening = (
        !inPost
        && (post.embeds.length > 1)
    );
    let embeds = post.embeds;
    const embedsCountOverMax = post.embeds.length - 1;
    if (embedsNeedsShortening) {
        embeds = post.embeds.slice(0, 1);
    }
    
    function newDateDetail(type: string, key: string) {
        return { type, key };
    }
    
    let editModalOpen = false;
    let deleteModalOpen = false;
    let menu: ContextMenu;
    
    let expandTextItems = [];
    if (mediaNeedsShortening) {
        expandTextItems.push(`${mediaCountOverMax} media items`);
    }
    if (embedsNeedsShortening) {
        expandTextItems.push(`${embedsCountOverMax} embeds`);
    }
    if (unknownMedia.length > 0) {
        expandTextItems.push(`${unknownMedia.length} downloads`);
    }
    let expandText = expandTextItems.join(", ");
    
    
    $: {
        if (editModalOpen || deleteModalOpen) menu?.close();
    }
</script>


{#if dev}
    <ModalPostDelete post={post} bind:open={deleteModalOpen} />
    <ModalPostEdit post={post} bind:open={editModalOpen} />
    
    <ContextMenu bind:this={menu}>
        <ContextMenuItem onClick={() => editModalOpen = true}>Edit</ContextMenuItem>
        <ContextMenuItem onClick={() => deleteModalOpen = true}>Delete</ContextMenuItem>
    </ContextMenu>
{/if}

<div class="container" style={inEmbed ? "font-size: 14px" : ""}>

{#if post.fm.pinned}
    <div class="pinned">📌 Pinned</div>
{/if}

<div class="header">
    {#if inModal}
        <div class="profile">
            <FeedProfilePic size="42px" feed={post.feed} />
            <div>
                <div class="title">{post.feed.meta.title}</div>
                <div class="path">{post.feed.urlShort}</div>
            </div>
        </div>
    {:else}    
        <a href={post.feed.url}>
            <div class="profile">
                <FeedProfilePic size="42px" feed={post.feed} />
                <div>
                    <div class="title">{post.feed.meta.title}</div>
                    <div class="path">{post.feed.urlShort}</div>
                </div>
            </div>
        </a>
        
        {#if dev}
            <Button onClick={menu?.open}>
                ✏️
            </Button>
        {/if}
    {/if}
</div>

<div class="post">
    {#if inPost}
        {@html post.html}
    {:else}
        {@html post.htmlShort}
        {#if postHtmlNeedsShortening}
            <a href={post.url}><p>
                ... (Read More)
            </p></a>
        {/if}
    {/if}
</div>

{#if !inEmbed}
    <div class="media">
        <Masonry
            items={media}
            getId={(item: Media) => item.id + item.extension}
            let:item={item}
            minColWidth={160}
            maxColWidth={600}
            animate={false}
        >
            {#if item.extension == ".png"}
                {#await import(`../../src/feeds/${post.feed.id}/${post.id}/${item.id}.png?as=post`) then { default: src }}
                    <Image src={src} fullSrc={item.urlGitHub} exif={item.exif} />
                {/await}
            {:else if item.extension == ".jpg"}
                {#await import(`../../src/feeds/${post.feed.id}/${post.id}/${item.id}.jpg?as=post`) then { default: src }}
                    <Image src={src} fullSrc={item.urlGitHub} exif={item.exif} />
                {/await}
            {:else if item.extension == ".jpeg"}
                {#await import(`../../src/feeds/${post.feed.id}/${post.id}/${item.id}.jpeg?as=post`) then { default: src }}
                    <Image src={src} fullSrc={item.urlGitHub} exif={item.exif} />
                {/await}
            {:else if item.extension == ".webp"}
                {#await import(`../../src/feeds/${post.feed.id}/${post.id}/${item.id}.webp?as=post`) then { default: src }}
                    <Image src={src} fullSrc={item.urlGitHub} exif={item.exif} />
                {/await}
            {:else if item.extension == ".gif"}
                {#await import(`../../src/feeds/${post.feed.id}/${post.id}/${item.id}.gif`) then { default: src }}
                    <Image src={src} fullSrc={item.urlGitHub} exif={item.exif} />
                {/await}
            {:else if item.extension == ".svg"}
                {#await import(`../../src/feeds/${post.feed.id}/${post.id}/${item.id}.svg`) then { default: src }}
                    <Image src={src} fullSrc={item.urlGitHub} />
                {/await}
            {:else if item.extension == ".mp4"}
                {#await import(`../../src/feeds/${post.feed.id}/${post.id}/${item.id}.mp4`) then { default: src }}
                    <Video src={src} gifMode={false} />
                {/await}
            {:else if item.extension == ".webm"}
                {#await import(`../../src/feeds/${post.feed.id}/${post.id}/${item.id}.webm`) then { default: src }}
                    <Video src={src} gifMode={false} />
                {/await}
            {/if}
        </Masonry>
        <div>
            {#each embeds as embed}
                <PostEmbed {embed} />
            {/each}
            {#if !inFeed}
                {#each unknownMedia as media}
                    <br>
                    <a href={media.urlGitHub}>
                        {media.id}{media.extension} (on GitHub)
                    </a>
                {/each}
            {:else}
                {#if expandText}
                    <br>
                    <Button onClick={post.url}>
                        +{expandText}
                    </Button>
                {/if}
            {/if}
        </div>
    </div>
{/if}

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
    {#if !inModal}
        <Button
            onClick={post.url}
            copyOnClick={
                (!inFeed && !inEmbed)
                ? post.url
                : undefined
            }
        >
            {#if inFeed || inEmbed}
                💬
            {/if}
            🔗
        </Button>
    {/if}
</div>

</div>

<style lang="scss">
    .pinned {
        font-size: 0.64em;
        opacity: 0.6;
    }
    
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .media {
        margin-bottom: 8px;
    }
    
    .profile {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-top: 0.5rem;
        margin-bottom: 0.75rem;
        font-size: 0.9em;
        
        .title {
            color: white;
        }
        
        .path {
            color: grey;
            font-size: 0.8em;
        }
    }
    
    .container {
        font-size: 18.75px;
    }
    
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        
        .timestamps {
            font-size: 0.7em;
            color: rgba(255, 255, 255, 0.5);
        }
    }
</style>