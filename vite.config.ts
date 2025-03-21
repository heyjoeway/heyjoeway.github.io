import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite'

export default defineConfig({
	plugins: [
		sveltekit(),
		imagetools({
			profiles: {
				run: new URLSearchParams(""),
				post: new URLSearchParams("h=1200&withoutEnlargement")
			}
		})
	],
	assetsInclude: [
		"**/*.blend"
	],
	resolve: {
		alias: [
			{ find: '$joeysvelte', replacement: '/src/lib/joeysvelte/src/lib/' },
		]
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	}
});
