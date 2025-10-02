<script lang="ts">
	import Tag from "$lib/Tag.svelte";
	import HoverContent from "$lib/HoverContent.svelte";
	import SvPost from "$lib/Post.svelte";
	import Skill from "./Skill";
	
	export let skill: Skill;
	
	let hoverText = "";
	if (skill.citation && typeof skill.citation === 'string') {
		hoverText = skill.citation;
	}
</script>

{#if skill.citation}
	{#if typeof skill.citation === 'object'}
		<HoverContent hover={hoverText}>
			<Tag>{skill.text}</Tag>
			<SvPost
				post={skill.citation}
				inEmbed={true}
				slot="hover"
			/>
		</HoverContent>
	{:else}
		<HoverContent hover={hoverText}>
			<Tag>{skill.text}</Tag>
		</HoverContent>
	{/if}
{:else}
	<Tag>{skill.text}</Tag>
{/if}