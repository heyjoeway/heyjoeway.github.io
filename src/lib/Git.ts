import {
    simpleGit,
    type LogResult,
    type DefaultLogFields
} from 'simple-git';

const git = simpleGit();

export async function getLatestCommitDate(path: string) {
    try {
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
        return gitLog.latest.date; // ISO8601
    } catch (e) {
        return undefined;
    }
}

export async function getFirstCommitDate(path: string) {
    try {
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
        const gitLogAll = [...gitLog.all];
        gitLogAll.reverse();
        const gitLogFirst = gitLogAll[0];
        if (!gitLogFirst) throw new Error("No git log found");
        return gitLogFirst.date; // ISO8601
    } catch (e) {
        return undefined;
    }
}