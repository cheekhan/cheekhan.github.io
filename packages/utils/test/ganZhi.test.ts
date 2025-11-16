import { test } from "vitest"
import { Gandhi } from "../src/index"

test('日期转为四柱：', () => {
    const date = new Date()
    const info = Gandhi.useYmdhInfo()
    console.log(date)
    console.log(info)
})