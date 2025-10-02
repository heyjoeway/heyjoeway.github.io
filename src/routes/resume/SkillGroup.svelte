<script lang="ts">
	import SkillItem from "./SkillItem.svelte";
	import Skill from "./Skill";
	import type Profile from "./Profile";

	export let id: string;
	export let proficiency: string;
	export let skills: Skill[];
	export let profile: Profile;
	
	let hide = profile.skills?.[id] === null;
</script>

{#if !hide}
	<div class="outer">
		<div>
			<h2>{proficiency}</h2>
		</div>
		<div class="tags">
			{#each skills as skill}
				{#if !(profile.skills?.[id]?.includes(skill.text))}
					<SkillItem {skill} />
				{/if}
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.outer {
		display: flex;
		gap: 16px;
		vertical-align: top;
		
		:global(h2) {
			margin: 0;
			padding: 0;
			width: 124px;
		}
	}
	
	.tags {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 8px;
	}
</style>