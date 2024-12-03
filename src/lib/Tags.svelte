<style lang="scss">

@keyframes fade-in {
	from {
		opacity: 0%;
	}
	to {
		opacity: 100%;
	}
}

div {
	display: inline;
	
	a {
		opacity: 0%;
		animation-name: fade-in;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
		
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		background: rgba(255, 255, 255, 0.3);
		color: black;
		height: 20px;
		line-height: 20px;
		text-transform: lowercase;
		font-size: 11px;
		margin-top: 8px;
		margin-right: 8px;
		border-radius: 6px;
		padding: 0px 6px;
		position: relative;
		box-sizing: border-box;
		display: inline-block;
		
		@for $i from 1 through 19 {
			&:nth-child(#{$i}) { animation-delay: #{0.75 + $i * 0.25}s; }
		}
	}
}

</style>

<script lang="ts">
	import { type TagDetails } from '$lib/Tags';
	export let tags: TagDetails[];
</script>

<div>
	{#each tags as tag}
		<a href={tag.url}>{tag.name}</a>
	{/each}
</div>