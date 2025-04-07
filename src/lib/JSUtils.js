import hljs from 'highlight.js';

export function escapeBackticks(str) {
	return str.replace(/`/g, "\\`");
}

export function highlightCode(code, lang) {
	let out = {
		value: code
	};
	try {
		out = hljs.highlight(out.value, { language: lang || "" });
	} catch (e) { console.warn(e) };
	
	return `<pre><code>${out.value}</code></pre>`;
}