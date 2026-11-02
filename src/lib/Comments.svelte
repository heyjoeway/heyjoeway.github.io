<script lang="ts">
    import { page } from '$app/stores';

    import Consent from './Consent.svelte';
    import type { Consentable } from './Consent';

    // Site path of the page, e.g. /feeds/main/101826_0950AM
    export let pageID: string;
    export let pageTitle: string;

    const disqusShortname = "TODO-SHORTNAME";

    // Site uses trailingSlash: 'always'
    $: pageUrl = `${$page.data.origin}${pageID}/`;

    function disqusConfig(this: any) {
        this.page.url = pageUrl;
        this.page.identifier = pageID;
        this.page.title = pageTitle;
    }

    // Navigating between pages doesn't reload the embed, so after the first
    // load, point the existing one at the new page instead
    function disqus(node: HTMLElement, _pageID: string) {
        const w = window as any;
        if (w.DISQUS) {
            w.DISQUS.reset({ reload: true, config: disqusConfig });
        } else {
            w.disqus_config = disqusConfig;
            const script = document.createElement('script');
            script.src = `https://${disqusShortname}.disqus.com/embed.js`;
            script.setAttribute('data-timestamp', String(+new Date()));
            document.body.appendChild(script);
        }
        return {
            update() {
                w.DISQUS?.reset({ reload: true, config: disqusConfig });
            }
        };
    }

    const disqusConsentable = {
        key: "disqus",
        disabledMessage: "Comments are currently disabled.",
        buttonMessage: "Enable Comments",
        privacyMessage: `By enabling comments, you agree to allow this website to connect to Disqus and to the <a href="https://disqus.com/privacy-policy/" target="_blank">Disqus Privacy Policy</a>.`
    } as Consentable;
</script>

<Consent consentable={disqusConsentable}>
    <div id="disqus_thread" use:disqus={pageID}></div>
</Consent>
