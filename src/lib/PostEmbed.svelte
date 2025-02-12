<script lang="ts">
    import type { Consentable } from "$lib/Consent";
    
    import Youtube from "svelte-youtube-embed";
    import Consent from './Consent.svelte';
    import type { Embed } from './Feed';
    
    const youtubeConsentable = {
        key: "youtube",
        disabledMessage: "YouTube embeds are currently disabled.",
        buttonMessage: "Enable YouTube embeds",
        privacyMessage: `By enabling YouTube embeds, you agree to allow this website to connect to YouTube and to the <a href="https://policies.google.com/privacy?hl=en" target="_blank">Google Privacy Policy</a>.`
    } as Consentable;
    
    export let embed: Embed;
</script>

{#if embed.platform == "youtube"}
    <Consent consentable={youtubeConsentable}>
        <Youtube
            id={embed.id}
            altThumb={true}
            animations={false}
            thumbnail={undefined}
            play_button={undefined}
        />
    </Consent>
{/if}
