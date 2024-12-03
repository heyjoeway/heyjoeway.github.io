export interface TagDetails {
	name: string;
	url: string;
}

export function listToTagDetails(list: string[]): TagDetails[] {
	return list.map(category => {
		return {
			name: category,
			url: `/category/${category}/`
		};
	});
}

export function strToTagDetails(str: string): TagDetails[] {
	return listToTagDetails(str.split(" "));
}
