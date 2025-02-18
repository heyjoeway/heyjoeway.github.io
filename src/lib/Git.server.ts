import {
    simpleGit,
    type LogResult,
    type DefaultLogFields
} from 'simple-git';

const git = simpleGit({
    maxConcurrentProcesses: 64 // big number go brrr
});

export async function getLatestCommitDate(path: string): Promise<string | undefined> {
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

export async function getFirstCommitDate(path: string): Promise<string | undefined> {
    try {
        const gitLog: LogResult<DefaultLogFields> = await new Promise(
            (resolve, reject) => git.log(
                {
                    "file": path
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

interface FirstAndLatestCommitDates {
    first: string | undefined; // ISO8601
    latest: string | undefined; // ISO8601
}

export async function getFirstAndLatestCommitDates(path: string): Promise<FirstAndLatestCommitDates> {
    try {
        const gitLog: LogResult<DefaultLogFields> = await new Promise(
            (resolve, reject) => git.log(
                {
                    "file": path
                },
                (err, log) => {
                    if (err) return reject(err);
                    resolve(log);
                }
            )
        );
        const gitLogAll = [...gitLog.all];
        const gitLogLatest = gitLogAll[0];
        gitLogAll.reverse();
        const gitLogFirst = gitLogAll[0];
        if (!gitLogFirst) throw new Error("No git log found");
        return {
            first: gitLogFirst.date,
            latest: gitLogLatest.date
        } as FirstAndLatestCommitDates;
    } catch (e) {
        return {
            first: undefined,
            latest: undefined
        };
    }
}

let _treeUrl: string | undefined = undefined;

export async function getTreeUrl() {
    if (_treeUrl) return _treeUrl;
    const branch = await git.revparse(["--abbrev-ref", "HEAD"]);
    let url = (await git.getConfig("remote.origin.url")).value;
    if (!url) throw new Error("Error retrieving git origin URL");
    if (url?.endsWith(".git")) {
        url = url.slice(
            0,
            url.length - 4
        );
    }
    _treeUrl = `${url}/tree/${branch}/`;
    return _treeUrl;
}