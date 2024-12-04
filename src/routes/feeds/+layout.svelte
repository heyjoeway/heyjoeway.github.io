<script lang="ts">
	import Layout from "$lib/Layout.svelte";
	import Comments from "$lib/Comments.svelte";
	
	export let data;
</script>

<Layout data={data}>

	<slot></slot>
	
    {#await import(`./main/${data.test}.png`) then { default: src }}
        <img {src} alt="Image" />
    {/await}
    
	<br>

    <hr>
    <!-- <Comments pageID={data.id} pageTitle={data.fm.title} /> -->
</Layout>