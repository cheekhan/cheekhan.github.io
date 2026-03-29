/**
 * 使用 git log --name-status 格式打印日志
 * 然后筛选 A、M 的文件
 */

import {spawnSync} from 'child_process'
import {existsSync, copyFileSync} from "fs";


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
            '--name-status',
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
 * 导出文件
 * @param since
 * @param until
 * @param author
 */
export default function (since, until, author) {
    const logs = exe(since, until, author)
        .split(/\r?\n/)
        .filter((line) => line.trim() !== '');
    const fileMap = new Map()
    logs.forEach(log => {
        if (log.startsWith('M\t') || log.startsWith('A\t')) {
            const filePath = log.replace(/^[AM]/, '').trim()
            const filePathList = filePath.split('/');
            const fileName = filePathList[filePathList.length - 1];
            if (existsSync(filePath)) {
                if (!fileMap.has(filePath)) {
                    fileMap.set(fileName, filePath);
                }
            }
        }
    })
    fileMap.entries().forEach(([k, v]) => {
            console.log(`复制文件：${v}`)
            copyFileSync(v, `./cr/${author}/code/${k}`)
        }
    )
}