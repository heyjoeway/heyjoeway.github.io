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
 * @param {string} inputHtml
 */
function wrapHighlightedLines(inputHtml) {
	const lines = [];
	let currentLine = '';
	let i = 0;
	const openTags = [];

	while (i < inputHtml.length) {
		const char = inputHtml[i];

		if (char === '<') {
			const endTagIndex = inputHtml.indexOf('>', i);
			if (endTagIndex === -1) break;

			const tag = inputHtml.slice(i, endTagIndex + 1);
			const isOpening = /^<span/.test(tag);
			const isClosing = /^<\/span/.test(tag);

			currentLine += tag;

			if (isOpening) {
				openTags.push(tag);
			} else if (isClosing) {
				openTags.pop();
			}

			i = endTagIndex + 1;
		} else if (char === '\n') {
			// Close all tags
			const closing = openTags.slice().reverse().map(() => '</span>').join('');
			// Open all tags again
			const opening = openTags.join('');

			lines.push(`<span class="code-line">${currentLine}${closing}</span>`);
			currentLine = opening;
			i++;
		} else {
			currentLine += char;
			i++;
		}
	}

	// Push the last line if anything remains
	if (currentLine) {
		const closing = openTags.slice().reverse().map(() => '</span>').join('');
		lines.push(`<span>${currentLine}${closing}</span>`);
	}

	return lines.join('\n');
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
	
	const linesWrapper = wrapHighlightedLines(out.value);
	
	return linesWrapper;
}