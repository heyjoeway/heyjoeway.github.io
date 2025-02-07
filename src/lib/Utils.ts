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