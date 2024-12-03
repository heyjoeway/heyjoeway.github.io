<script lang="ts">
    import { onMount } from 'svelte';

    import { lock, unlock } from 'tua-body-scroll-lock';
    
    onMount(() => {
        lock();
        return unlock;
    });
</script>