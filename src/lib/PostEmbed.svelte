<script lang="ts">
    import Center from './Center.svelte';
    import Button from '$joeysvelte/Button.svelte';
    import type { Embed } from "./Feed";
    import { persisted } from 'svelte-persisted-store';
    
    import Youtube from "svelte-youtube-embed";
    
    let enableYoutube = persisted('enableYoutube', false);
    
    export let embed: Embed;
</script>

{#if embed.platform == "youtube"}
    {#if $enableYoutube}
        <Youtube id={embed.id} altThumb={true} animations={false} />
    {:else}
        <Center>
            <p>
                YouTube embeds are currently disabled.
            </p>
            <br>
            <Button onClick={() => $enableYoutube = true}>
                Enable YouTube embeds
            </Button><br>
            <p style:text-align="center">
                By enabling YouTube embeds, you agree to allow this website to connect to YouTube and to the <a href="https://policies.google.com/privacy?hl=en" target="_blank">Google Privacy Policy</a>.
            </p>
        </Center>
    {/if}
{/if}
