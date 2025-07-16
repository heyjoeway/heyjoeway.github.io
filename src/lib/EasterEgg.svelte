<script lang="ts">
	export let text: string;
</script>

<span aria-label={text} class="text">
	{text}
	<div class="easter-egg">
		<slot />
	</div>
</span>

<style lang="scss">
	.easter-egg {
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		padding: 8px;
		background: rgba(0,0,0,0.95);
		visibility: hidden;
	}
	
	.text {
		position: relative;
		
		&:hover {
			& > .easter-egg {
				visibility: visible;
			}
		}
	}
</style>