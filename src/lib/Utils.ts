import YAML from 'yaml';

export function formatDate(rawDateStr: string | undefined) {
	if (!rawDateStr) return "";
	
	const date = new Date(rawDateStr);
	
	const monthNames = [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun",
		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	];
	return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function formatDateTime(rawDateStr: string | undefined) {
	if (!rawDateStr) return "";
	
	const dateStr = formatDate(rawDateStr);

	const timeStr = new Date(rawDateStr).toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true
	});
	
	return `${dateStr} at ${timeStr}`;
}

// https://stackoverflow.com/a/45205645
export function styleObjToStr(obj: Record<string, any>) {
	return Object.entries(obj).map(([k, v]) => `${k}:${v}`).join(';')
}

export function splitext(path: string) {
	const lastDot = path.lastIndexOf(".");
	return [
		path.slice(0, lastDot),
		path.slice(lastDot)
	];
}

export function arrMax<T>(arr: Array<T> | undefined) {
	if (!arr) return undefined;
	if (arr.length === 0) return undefined;
	return arr.reduce((a, b) => a > b ? a : b);
}

export function arrMin<T>(arr: Array<T> | undefined) {
	if (!arr) return undefined;
	if (arr.length === 0) return undefined;
	return arr.reduce((a, b) => a < b ? a : b);
}

export function humanReadableSize(bytes: number): string {
	const units = ["B", "KB", "MB", "GB", "TB", "okay you can stop testing this now"];
	for (let unit of units) {
		if (bytes < 1024) return `${bytes.toFixed(1)} ${unit}`;
		bytes /= 1024;
	}
	return `${bytes.toFixed(1)} ${units[units.length - 1]}`;
}

// Thanks to:
// - https://codegolf.stackexchange.com/questions/32964/reduce-html-to-n-characters-while-keeping-the-formatting
// - ChatGPT
export function splitHtmlAt(str: string, n: number): string {
	let result = '';
	let count = 0;
	let inTag = false;
	let tagBuffer = '';
	let prevChar = '';
  
	for (let i = 0; i < str.length; i++) {
	  const char = str[i];
	  if (char === '<') {
		inTag = true;
		tagBuffer = '';
	  } else if (char === '>') {
		inTag = false;
		tagBuffer += '>';
		result += tagBuffer;
		continue;
	  }
  
	  if (inTag) {
		tagBuffer += char;
	  } else {
		if (count < n) {
		  if (prevChar === '\n' && char === '<') {
			result = result.trimEnd();
		  }
		  result += char;
		  count++;
		} else {
		  break;
		}
	  }
	  prevChar = char;
	}
  
	return result;
}

export function extractFrontmatter(mdStr: string): [Record<string, any>, string] {
	// regex: ^(?:---\n)?.*\n---\n
	const frontmatterRegex = /^(?:---\n)?([\s\S]*?)\n---\n/;
	const match = frontmatterRegex.exec(mdStr);
	if (!match) return [{}, mdStr];
	
	const frontmatterStr = match[1];
	const content = mdStr.slice(match[0].length);
	
	const frontmatter = YAML.parse(frontmatterStr);
	return [frontmatter, content];
}

export function addFrontmatter(mdStr: string, fm: Record<string, any>): string {
	const frontmatterStr = YAML.stringify(fm);
	return `---\n${frontmatterStr}---\n${mdStr}`;
}

export function editFrontmatter(mdStr: string, fm: Record<string, any>): string {
	const [oldFm, content] = extractFrontmatter(mdStr);
	const newFm = { ...oldFm, ...fm };
	return addFrontmatter(content, newFm);
}