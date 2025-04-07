import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeBackticks } from "./src/lib/JSUtils.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: "./src/lib/MdsvexLayout.svelte",
			highlight: {
				highlighter: (code, lang) => {
					return `
						<Components.pre
							lang="${lang}"
							code="{\`${escapeBackticks(code)}\`}"
						/>
					`;
				}
			},
		})
	],
	kit: {
		prerender: {
			handleMissingId: "ignore"
		},
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: false
		})
	},
	
	extensions: [".svelte", ".svx"]
};

export default config;
