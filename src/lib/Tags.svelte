<style lang="scss">

@keyframes fade-in {
	from {
		opacity: 0%;
	}
	to {
		opacity: 100%;
	}
}

span {	
	margin-bottom: 8px;
	text-transform: lowercase;
	display: flex;
	gap: 8px;
	
	:global(a) {
		opacity: 0%;
		animation-name: fade-in;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
				
		@for $i from 1 through 19 {
			&:nth-child(#{$i}) { animation-delay: #{0 + $i * 0.125}s; }
		}
	}
	
	&.center {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
}

</style>

<script lang="ts">
	import { type TagDetails } from '$lib/Tags';
	import Tag from './Tag.svelte';
	export let tags: TagDetails[];
	export let center: boolean = false;
	
	const warnTags = [ "ai" ];
</script>

<span class="{center ? 'center' : ''}">
	{#each tags as tag}
		<Tag
			url={tag.url}
			warn={warnTags.includes(tag.name)}
		>
			{tag.name}
		</Tag>
	{/each}
</span>