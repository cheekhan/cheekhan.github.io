/**
 *
 * 获取 -p 格式的 git log 文件
 * 该文件可能用于审价
 *
 */
import {spawnSync} from 'child_process'
import {writeFileSync} from "fs";

/**
 * 获取某个用户的 git 提交记录
 * @param since 开始日期，YYYY-MM-DD 格式
 * @param until 截止日期，YYYY-MM-DD 格式
 * @param author
 * @returns {string}
 */
function exe(since, until, author) {
    const result = spawnSync(
        'git',
        [
            'log',
            '-p',
            // '--name-status',
            // '--pretty=format:"[commit]%cd"',
            // --since="2024-01-01" --until="2024-01-31"
            `--since=${since}`,
            `--until=${until}`,
            `--author=${author}`,
        ],
        {encoding: 'utf-8', shell: false},
    )
    return result.stdout
}

/**
 * 保存 git log -p 的记录
 * @param since
 * @param until
 * @param author
 */
export default function (since, until, author) {
    const logs = exe(since, until, author);
    writeFileSync(`./cr/${author}/git-log.txt`, logs)
}