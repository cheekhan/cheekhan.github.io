/**
 * 日历配置
 * 正月雨水后月将为亥，名登明。
 * 二月春分后月将为戌，名河魁。
 * 三月谷雨后月将为酉，名从魁。
 * 四月小满后月将为申，名传送。
 * 五月夏至后月将为未，名小吉。
 * 六月大暑后月将为午，名胜光。
 * 七月处暑后月将为巳，名太乙。
 * 八月秋分后月将为辰，名天罡。
 * 九月霜降后月将为卯，名太冲。
 * 十月小雪后月将为寅，名功曹。
 * 十一冬至月后月将为丑，名大吉。
 * 十二月大寒后月将为子，名神后。
 *
 */
import branches, { EarthlyBranch } from "./earthlyBranch.uts"

// 换年表
export const yearSplit = [
    '2025-01-29',
    '2026-02-17'
]

// 换将节气表
export const jieqi: Record<number, Array<[string, EarthlyBranch]>> = {
    2025: [
        ["2025-02-18", branches[11]],
        ["2025-03-20", branches[10]],
        ["2025-04-20", branches[9]],
        ["2025-05-21", branches[8]],
        ["2025-06-21", branches[7]],
        ["2025-07-22", branches[6]],
        ["2025-08-23", branches[5]],
        ["2025-09-23", branches[4]],
        ["2025-10-23", branches[3]],
        ["2025-11-22", branches[2]],
        ["2025-12-21", branches[1]]
    ],
    2026: [
        ["2026-01-20", branches[0]],
        ["2026-02-18", branches[11]],
        ["2026-03-20", branches[10]],
        ["2026-04-20", branches[9]],
        ["2026-05-21", branches[8]],
        ["2026-06-21", branches[7]],
        ["2026-07-23", branches[6]],
        ["2026-08-23", branches[5]],
        ["2026-09-23", branches[4]],
        ["2026-10-23", branches[3]],
        ["2026-11-22", branches[2]],
        ["2026-12-22", branches[1]],
    ]
}

/**
 * --------------------------------------------------------------------------------
 */
/**
 * 推算四柱
 * 年柱：从2025.01.29日，乙巳年，春节开始推算，依次记录每年春节日期
 * 月柱：月柱的支是月建，就需要从2025年02月03日立春为寅开始，再利用年上起月法，得到月干
 * 日柱：2025.01.29日，为戊戌日，依次推算,准确日期格式'2025-01-29T23:59:59+08:00'
 * 时柱：按小时计算，得出时支，再使用日上起时法，得出时支
 *
 * 月将：完整记录24节气，除了用于月建，还有用于月将的计算
 */
import { yearSplit, jieqi } from "./calender.uts"
import stems, { HeavenlyStem } from "./heavenlyStem.uts"
import branches, { EarthlyBranch } from "./earthlyBranch.uts"
import { findNext, type JiaziLink, root } from "./stemBranch.uts"
// 起始 年 和 日的干支
const yearGanzhi : [HeavenlyStem, EarthlyBranch] = [stems[1], branches[5]]
const dayGanzhi : [HeavenlyStem, EarthlyBranch] = [stems[4], branches[10]]

export function useYmdhInfo(date ?: string) : {
    y : [HeavenlyStem, EarthlyBranch],
    m : [HeavenlyStem, EarthlyBranch],
    d : [HeavenlyStem, EarthlyBranch],
    h : EarthlyBranch,
    yuejiang : EarthlyBranch,
    current : Date
} {
    let yearInfo : JiaziLink = root; // 年柱
    let monthInfo : JiaziLink = root; // 月柱
    let dayInfo : JiaziLink = root; // 日柱
    let hourInfo : EarthlyBranch = branches[0]; // 时柱
    let yuejiangInfo : EarthlyBranch = branches[10]; // 月将

    let current = new Date(date ? date : new Date());
    if (isNaN(current.valueOf())) {  // 传入的字符串未正确的格式化出来
        console.log(`使用【${date}】格式化日期错误`)
        current = new Date()
    }
    // 遍历数组，计算年柱
    yearSplit.some((y, i) => {
        const yd = new Date(y)
        if (current >= yd) {
            // 检测到第一个低于当前日期的年开头,i就作为偏移量
            yearInfo = findNext(yearGanzhi[0], yearGanzhi[1], i)
            return true
        }
    })
    // 计算日期差，得到日柱
    const dayStart = new Date('2025-01-29T23:59:59+08:00')
    dayInfo = findNext(dayGanzhi[0], dayGanzhi[1], Math.ceil((current.getTime() - dayStart.getTime()) / (1000 * 60 * 60 * 24)))
    // 时间分为12份，计算时柱
    const hours = current.getHours()
    if (hours < 1) {
        hourInfo = branches[0]
    } else if (hours < 3) {
        hourInfo = branches[1]
    } else if (hours < 5) {
        hourInfo = branches[2]
    } else if (hours < 7) {
        hourInfo = branches[3]
    } else if (hours < 9) {
        hourInfo = branches[4]
    } else if (hours < 11) {
        hourInfo = branches[5]
    } else if (hours < 13) {
        hourInfo = branches[6]
    } else if (hours < 15) {
        hourInfo = branches[7]
    } else if (hours < 17) {
        hourInfo = branches[8]
    } else if (hours < 19) {
        hourInfo = branches[9]
    } else if (hours < 21) {
        hourInfo = branches[10]
    } else if (hours < 23) {
        hourInfo = branches[11]
    } else { hourInfo = branches[0] }
    // 根据节气表，得到月将
    jieqi[current.getFullYear()].some(j => {
        if (current.valueOf() > new Date(j[0]).valueOf()) {
            yuejiangInfo = j[1]
        } else {
            return true
        }
    })
    return {
        y: yearInfo.data,
        m: monthInfo.data,
        d: dayInfo?.data,
        h: hourInfo,
        yuejiang: yuejiangInfo,
        current: current
    }

}
// ------------------------------------------------------------------
/**
 *
 * 干支计算
 * 1、60个
 * 2、获取指定的干支组合的下一位
 */

import branches, { EarthlyBranch } from "./earthlyBranch.uts"
import stems, { HeavenlyStem } from "./heavenlyStem.uts"
export type JiaziLink = { // 甲子的节点信息
    data : [HeavenlyStem, EarthlyBranch],
    next : JiaziLink | null
}
const createLink = () => {
    let root : JiaziLink = { data: [stems[0], branches[0]], next: null }
    let i = 0;
    let head : JiaziLink | null = null;
    let s = 1, b = 1;
    while (i < 60) {
        if (s >= 10) s = 0
        if (b >= 12) b = 0
        if (head) {
            const node : JiaziLink = {
                next: null,
                data: [stems[s], branches[b]]
            }
            head.next = node
            head = node
        } else {
            root = head = {
                data: [stems[s], branches[b]],
                next: null
            }
        }
        s += 1;
        b += 1;
        i += 1
    }
    return root
}

export const root = createLink()
/** 获取下一个干支组合 */
export function findNext(stem : HeavenlyStem, branch : EarthlyBranch, step : number = 1) : JiaziLink | null {
    let head = root
    if (head) {
        while (head) {
            if (head.data[0].value === stem.value && head.data[1].value === branch.value) {
                if (head.next) {
                    break // 找到当前节点
                } else {
                    return null
                }
            }
            head = head.next
        }
    }
    while (step > 0) {
        if (head && head.next) {
            head = head.next
        } else {
            head = root
        }
        step -= 1
    }
    return head
}
// 将干支信息，组合为一个节点，并返回在链中的位置
export function useJiaziNode(stem : HeavenlyStem, branch : EarthlyBranch) : JiaziLink | null {
    let head = root
    if (head) {
        while (head) {
            if (head.data[0].value === stem.value && head.data[1].value === branch.value) {
                return head
            }
            head = head.next
        }
    }
    return null
}
// 获取甲子循环
export function useAllNodes() {
    let head = root;
    const arr:Array<[HeavenlyStem, EarthlyBranch]> = [];
    while (head.next) {
        arr.push(head.data)
        head = head.next
    }
    return arr
}