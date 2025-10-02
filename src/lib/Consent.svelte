<script lang="ts">
    import { persisted } from 'svelte-persisted-store';
    import Center from './Center.svelte';
    import Button from '$joeysvelte/Button.svelte';
    
    import type { Consentable } from "$lib/Consent";
    
    export let consentable: Consentable;
    
    let enable = persisted(`consent-${consentable.key}`, false);
</script>

{#if $enable}
    <slot></slot>
{:else}
    <Center>
        <p>{@html consentable.disabledMessage}</p>
        <p><Button onClick={() => $enable = true}>{consentable.buttonMessage}</Button></p>
        <p style:text-align="center">{@html consentable.privacyMessage}</p>
    </Center>
{/if}

