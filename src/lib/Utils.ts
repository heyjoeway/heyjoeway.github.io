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
		path.slice(lastDot).toLowerCase()
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