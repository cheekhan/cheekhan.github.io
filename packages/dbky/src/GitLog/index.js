import logFile from "./logFile";
import commitFile from "./commitFile";
import {mkdirSync} from "fs"

export default function (since, until, author) {
    try {
        const dateReg = /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/
        if (!dateReg.test(until)) {
            console.error('until 日期格式错误')
            return false
        }
        if (!dateReg.test(since)) {
            console.error('since 日期格式错误')
            return false
        }
        console.log(
            `解析入参：过滤从${since},到${until}时间范围，提交者为${author}的提交记录`,
        )
        mkdirSync(`./cr/${author}`, {recursive: true})
        mkdirSync(`./cr/${author}/code`, {recursive: true})
        logFile(since, until, author)
        commitFile(since, until, author)
    } catch (e) {
        console.error('导出 git 提交日志错误：', e)
    }
}
