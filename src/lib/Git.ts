import {
    simpleGit,
    CleanOptions,
    type LogResult,
    type DefaultLogFields
} from 'simple-git';

const git = simpleGit().clean(CleanOptions.FORCE);

export async function getLatestCommitDate(path: string) {
	const gitLog: LogResult<DefaultLogFields> = await new Promise(
		(resolve, reject) => git.log(
			{
				"file": path,
				"max-count": 1
			},
			(err, log) => {
				if (err) return reject(err);
				resolve(log);
			}
		)
	);
	if (!gitLog.latest) throw new Error("No git log found");
	return gitLog.latest.date;
}

export async function getFirstCommitDate(path: string) {
    const gitLog: LogResult<DefaultLogFields> = await new Promise(
        (resolve, reject) => git.log(
            {
                "file": path,
                "reverse": "true",
                "max-count": 1
            },
            (err, log) => {
                if (err) return reject(err);
                resolve(log);
            }
        )
    );
    if (!gitLog.latest) throw new Error("No git log found");
    return gitLog.latest.date;
}