import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeBackticks } from "./src/lib/JSUtils.js";

function remarkAddHeadingSequenceClasses() {
	/**
	 * @param {import('mdast').Root} tree
	 */
	return (tree) => {
		let counters = Array(6).fill(0); // Create an array to hold counters for h1–h6
		
		for (let i = 0; i < tree.children.length; i++) {
			const node = tree.children[i];
			if (node.type !== 'heading') continue;
			
			const level = node.depth - 1;
			
			// Reset all deeper heading counters (e.g., h2–h6) when a heading of equal or higher level appears
			for (let d = level + 1; d < counters.length; d++) {
				counters[d] = 0;
			}
			
			counters[level]++;
			
			if (!node.data) node.data = {};
			if (!node.data.hProperties) node.data.hProperties = {};
			
			// You can change this to e.g. `level-1`, `level-2`, etc., or add multiple classes
			node.data.hProperties.class = `h${level + 1}-${counters[level]}`;
		}
	};
}

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
			remarkPlugins: [
				remarkAddHeadingSequenceClasses
			]
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
