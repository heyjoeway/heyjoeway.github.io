<style lang="scss">
    #cusdis_thread > :global(iframe) {
        height: 75vh;
    }
</style>

<script lang="ts">
    import Center from './Center.svelte';
    import Button from '$joeysvelte/Button.svelte';
    import { persisted } from 'svelte-persisted-store';
    
    export let pageID: string;
    export let pageTitle: string;
    
    let enableComments = persisted('enableComments', false);
</script>

{#if $enableComments}
    <div id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="93e3be58-0fd2-46ce-881f-6608d54d2fd4"
        data-page-id={pageID}
        data-page-title={pageTitle}
        data-theme="dark"
    ></div>
    
    <script async defer src="https://cusdis.com/js/cusdis.es.js"></script>
{:else}
    <Center>
        <p>
            Comments are currently disabled.
        </p>
        <br>
        <Button
            onClick={() => $enableComments = true}
        >
            Enable Comments
        </Button><br>
        <p style:text-align="center">
            By enabling comments, you agree to allow this website to connect to Cusdis and to the <a href="https://cusdis.com/privacy-policy" target="_blank">Cusdis Privacy Policy</a>.
        </p>
    </Center>
{/if}