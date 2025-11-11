import { test } from "vitest"
import { ganzhi } from "../src/index"

test('日期转为四柱：', () => {
    const date = new Date()
    const info = ganzhi.useYmdhInfo()
    console.log(date)
    console.log(info)
})