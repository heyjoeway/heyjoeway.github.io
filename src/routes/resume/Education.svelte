<script lang="ts">
	import Tag from "$lib/Tag.svelte"
	
	export let degree: string;
	export let university: string;
	export let gpa: number;
	export let where: string;
	export let when: string;
</script>

<div class="outer">
	<div>
		{degree}, {university}		
	</div>
	<div class="tags">
		<Tag>🎓 {gpa.toFixed(2)} GPA</Tag>
		<Tag>📍 {where}</Tag>
		<Tag>📅 {when}</Tag>	
	</div>
</div>

<style lang="scss">
.outer {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 8px;
}

.tags {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: right;
	gap: 8px;
}
</style>