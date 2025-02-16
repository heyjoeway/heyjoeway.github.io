<script lang="ts">
    import { dev } from '$app/environment';
    
    import Image from "$lib/Image.svelte";
    import Video from "$lib/Video.svelte";
    import Button from "$joeysvelte/Button.svelte";
    import ContextMenu from "$joeysvelte/ContextMenu.svelte";
    import ContextMenuItem from "$joeysvelte/ContextMenuItem.svelte";
	import { formatDateTime } from "$lib/Utils";
    import FeedProfilePic from "./FeedProfilePic.svelte";
    import type { Feed, Post, Media } from "./Feed";
    import ModalPostDelete from './ModalPostDelete.svelte';

    import Masonry from 'svelte-bricks'
    import PostEmbed from "./PostEmbed.svelte";
    
    export let feed: Feed;
    export let post: Post;
    export let inModal = false;
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
    
    let editModalOpen = false;
    let deleteModalOpen = false;
    let menu: ContextMenu;
    
    $: {
        if (editModalOpen || deleteModalOpen) menu?.close();
    }
</script>

<ModalPostDelete post={post} feed={feed} bind:open={deleteModalOpen} />

{#if dev}
    <ContextMenu bind:this={menu}>
        <ContextMenuItem onClick={() => deleteModalOpen = true}>Delete</ContextMenuItem>
    </ContextMenu>
{/if}

<div class="header">
    {#if inModal}
        <div class="profile">
            <FeedProfilePic size="42px" feed={feed} />
            <div>
                <div class="title">{feed.meta.title}</div>
                <div class="path">{feed.urlShort}</div>
            </div>
        </div>
    {:else}    
        <a href={feed.url}>
            <div class="profile">
                <FeedProfilePic size="42px" feed={feed} />
                <div>
                    <div class="title">{feed.meta.title}</div>
                    <div class="path">{feed.urlShort}</div>
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
    {@html post.html}
</div>

{#if !inModal}
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
        <Button onClick={post.url} linkCopyOnClick={!inFeed}>
            {#if inFeed}
                💬
            {/if}
            🔗
        </Button>
    {/if}
</div>

<style lang="scss">
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
    
    /**
    * Monokai theme for Prism.JS
    *
    * @author Martijn Swaagman
    * @license MIT 2015
    */
    :global(pre[class*="language-"]) {
        // margin: auto 8px;
        margin-bottom: 8px;
        
        border-width: 1px;
        border-color: #222;
        border-style: solid;
        background: rgba(46, 46, 46, 0.4);
        backdrop-filter: blur(32px);
        -webkit-backdrop-filter: blur(32px);
        
        box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        
        padding: 16px;   
    }
    :global(code[class*="language-"]),
    :global(pre[class*="language-"]) {
        color: #f8f8f2;
        text-shadow: 0 1px rgba(0, 0, 0, 0.3);
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.25;
        font-size: 14px;

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }

    :gloabl(pre[class*="language-"]) {
        padding: 1em;
        margin: .5em 0;
        overflow: auto;
        border-radius: 0.3em;
        
        
    }

    :global(:not(pre) > code[class*="language-"]) {
        padding: .1em;
        border-radius: .3em;
        
        
    }

    :global(.token.comment),
    :global(.token.prolog),
    :global(.token.doctype),
    :global(.token.cdata) {
        color: lightslategrey;
    }

    :global(.token.punctuation) {
        color: white;
    }

    :global(.namespace) {
        opacity: .7;
    }

    :global(.token.property),
    :global(.token.tag),
    :global(.token.constant),
    :global(.token.symbol),
    :global(.token.deleted) {
        color: deeppink;
    }

    :global(.token.boolean),
    :global(.token.number) {
        color: plum;
    }

    :global(.token.selector),
    :global(.token.attr-name),
    :global(.token.string),
    :global(.token.char),
    :global(.token.builtin),
    :global(.token.inserted) {
        color: lawngreen;
    }

    :global(.token.operator),
    :global(.token.entity),
    :global(.token.url),
    :global(.language-css .token.string),
    :global(.style .token.string),
    :global(.token.variable) {
        color: white;
    }

    :global(.token.atrule),
    :global(.token.attr),
    :global(.token.function) {
        color: khaki;
    }

    :global(.token.keyword) {
        color: deeppink;
        font-weight: bold;
    }

    :global(.token.regex),
    :global(.token.important) {
        color: #FD971F;
    }

    :global(.token.important),
    :global(.token.bold) {
        font-weight: bold;
    }
    :global(.token.italic) {
        font-style: italic;
    }

    :global(.token.entity) {
        cursor: help;
    }
</style>