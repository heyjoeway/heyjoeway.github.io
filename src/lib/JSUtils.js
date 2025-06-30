import hljs from 'highlight.js';

/**
 * Escapes backticks in a string.
 * @param {string} str
 * @returns {string}
 */
export function escapeBackticks(str) {
	return str.replace(/`/g, "\\`");
}

/**
 * Highlights code using highlight.js.
 * @param {string} code
 * @param {string | null | undefined} lang
 * @returns {string}
 */
export function highlightCode(code, lang) {
	let out = {
		value: code
	};
	try {
		out = hljs.highlight(out.value, { language: lang || "" });
	} catch (e) { console.warn(e) };
	
	return out.value;
}