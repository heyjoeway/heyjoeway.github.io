<style lang="scss">
    #cusdis_thread > :global(iframe) {
        height: 75vh;
    }
    
    
</style>

<script lang="ts">
    import { onMount } from 'svelte';
    
    import Consent from './Consent.svelte';
    import type { Consentable } from './Consent';
        
    export let pageID: string;
    export let pageTitle: string;
    
    const cusdisStyle = `
html, body {
    background: none transparent;
}
`;
    
    // AI wrote this shit but it seems to work
    function onIframeAdded(callback: (node: Element) => void) {
        onMount(() => {
            const observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    if (mutation.type !== 'childList') continue;
                    for (const node of mutation.addedNodes) {
                        if (node.nodeName !== 'IFRAME') continue;
                        callback(node as Element);
                        return;
                    }
                }
            });
            const targetNode = document.getElementById('cusdis_thread');
            if (targetNode) observer.observe(targetNode, { childList: true });
            return () => observer.disconnect();
        });
    }
    
    onIframeAdded((node: Element) => {
        let srcdoc = node.getAttribute("srcdoc") || "";
        const styleTag = `<style>${cusdisStyle}</style>`;
        srcdoc = srcdoc.replace('</head>', `${styleTag}</head>`);
        node.setAttribute("srcdoc", srcdoc);
    });
    
    const cusdisConsentable = {
        disabledMessage: "Comments are currently disabled.",
        buttonMessage: "Enable Comments",
        privacyMessage: `By enabling comments, you agree to allow this website to connect to Cusdis and to the <a href="https://cusdis.com/privacy-policy" target="_blank">Cusdis Privacy Policy</a>.`
    } as Consentable;
</script>

<Consent consentable={cusdisConsentable}>
    <div id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="93e3be58-0fd2-46ce-881f-6608d54d2fd4"
        data-page-id={pageID}
        data-page-title={pageTitle}
        data-theme="dark"
    ></div>
    
    <script async defer src="/cusdis.es.js"></script>
</Consent>