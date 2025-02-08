import path from "path";

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

const GITHUB_ROOT = "https://github.com/heyjoeway/heyjoeway.github.io/tree/master/";

export function githubLink(filePath: string) {
	const filePathRelative = path.relative(
		path.resolve("./"),
		filePath
	);
	const fileGitHubUrl = new URL(filePathRelative, GITHUB_ROOT);
	return fileGitHubUrl.href;
}

export function splitext(path: string) {
	const lastDot = path.lastIndexOf(".");
	return [
		path.slice(0, lastDot),
		path.slice(lastDot).toLowerCase()
	];
}