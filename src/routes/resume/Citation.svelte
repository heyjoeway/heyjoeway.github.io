<script lang="ts">
	import HoverContent from "$lib/HoverContent.svelte";
	import SvPost from "$lib/Post.svelte";
	import { type Post } from "$lib/Feed";
    import HideDuringPrint from "$joeysvelte/HideDuringPrint.svelte";
		
	export let post: Post | undefined = undefined;
</script>

{#if post}
	<HoverContent>
		<SvPost
			slot="hover"
			post={post}
			inEmbed={true}
		/>
		<HideDuringPrint>
			<a href={post.url}>🔖</a>
		</HideDuringPrint>
		<slot />
	</HoverContent>
{:else}
	<slot />
{/if}