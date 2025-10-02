<script lang="ts">
	import Tag from "$lib/Tag.svelte"

    export let icon: string = "";
    export let text: string = "";
</script>


<Tag on:click={() => {
    let result = prompt("Tag text", text);
    text = result || text;
}}>{icon} {text}</Tag>

