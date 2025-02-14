import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';

import { getTreeUrl } from "./Git.server";

let _cname: string | undefined = undefined;
export function getCname() {
	if (!_cname) {
		let repoRoot = path.resolve(
			path.dirname(
				fileURLToPath(import.meta.url)
			),
			"../../"
		);
		
		if (repoRoot.includes(".svelte-kit")) {
			repoRoot = repoRoot.replace(
				[".svelte-kit", "output"].join(path.sep), ""
			)
		}
		
		_cname = fs.readFileSync(path.join(repoRoot, "static", "CNAME")).toString();
	}
	return _cname;
}

export async function githubLink(filePath: string) {
	const filePathRelative = path.relative(
		path.resolve("./"),
		filePath
	);
	const fileGitHubUrl = (await getTreeUrl()) + filePathRelative;
	return fileGitHubUrl;
}