<script lang="ts">
    import Consent from './Consent.svelte';
    import type { Consentable } from './Consent';

    // Site path of the page, e.g. /feeds/main/101826_0950AM. Used as the
    // discussion's term, since pages don't have unique <title>s to map on.
    export let pageID: string;

    const giscusConfig = {
        "repo": "heyjoeway/heyjoeway.github.io",
        "repo-id": "R_kgDOIY5oyQ",
        "category": "General",
        "category-id": "DIC_kwDOIY5oyc4DKOks",
        "mapping": "specific",
        "strict": "0",
        "reactions-enabled": "1",
        "emit-metadata": "1",
        "input-position": "top",
        "theme": "dark_high_contrast",
        "lang": "en",
        "loading": "lazy"
    };

    // Navigating between pages reuses this element, so reload the embed
    // whenever the page changes
    function giscus(node: HTMLElement, term: string) {
        function load(term: string) {
            node.replaceChildren();
            const script = document.createElement('script');
            script.src = "https://giscus.app/client.js";
            for (const [key, value] of Object.entries(giscusConfig)) {
                script.setAttribute(`data-${key}`, value);
            }
            script.setAttribute("data-term", term);
            script.crossOrigin = "anonymous";
            script.async = true;
            node.appendChild(script);
        }
        load(term);
        return { update: load };
    }

    const giscusConsentable = {
        key: "giscus",
        disabledMessage: "Comments are currently disabled.",
        buttonMessage: "Enable Comments",
        privacyMessage: `By enabling comments, you agree to allow this website to connect to giscus and GitHub, and to the <a href="https://github.com/giscus/giscus/blob/main/PRIVACY-POLICY.md" target="_blank">giscus Privacy Policy</a>.`
    } as Consentable;
</script>

<Consent consentable={giscusConsentable}>
    <div class="giscus" use:giscus={pageID}></div>
</Consent>
