<script lang="ts">
	import AvoidPageBreak from "$joeysvelte/AvoidPageBreak.svelte"
	import Tag from "$lib/Tag.svelte"
	import ExperienceItem from "./ExperienceItem.svelte";
	import ExpItem from "./ExpItem";
	import type Profile from "./Profile";

	export let id: string = "";
	export let title: string = "";
	export let subtitle: string = "";
	export let where: string = "";
	export let when: string;
	export let items: ExpItem[] = [];
	export let profile: Profile;
	
	let hide = profile.experience?.[id] === null;
</script>

{#if !hide}
	<AvoidPageBreak>
		<div class="experience">
			<div>
				<h2>{title}</h2>
				{#if subtitle}
					<h3>{subtitle}</h3>
				{/if}
			</div>
			<div class="tags">
				{#if where}
					<Tag>📍 {where}</Tag>
				{/if}
				<Tag>📅 {when}</Tag>
			</div>
		</div>

		<ul>
			{#each items as item, index}
				{#if !(profile.experience?.[id]?.includes(index))}			
					<ExperienceItem {item} />
				{/if}
			{/each}
		</ul>
	</AvoidPageBreak>
{/if}
	
<style lang="scss">

.experience {
	display: flex;
	flex-direction: row;
	margin-bottom: 12px;
	align-items: center;
	justify-content: space-between;
}

.tags {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: right;
	gap: 8px;
}
</style>