<script lang="ts">
    import { listToTagDetails } from "$lib/Tags";
    import Tags from "$lib/Tags.svelte";
    import Center from "$lib/Center.svelte";
    import Layout from "./Layout.svelte";
    
    export let data;
	export let bgText: string = "heyjoeway";
</script>

<Layout bgText={bgText}>
    <slot></slot>
    
    <hr>
    <Tags center={true} tags={listToTagDetails(data.categories)} />
</Layout>

