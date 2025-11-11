import stems, { HeavenlyStem, useTianganList, StemJia, StemBing, StemWu, StemGeng, StemRen } from "./tianGan"
import branches, { EarthlyBranch } from "./diZhi"
import { findNext, linkRoot, JiaziLinkType } from "./utils"
/**
 * 处理日期：
 *  1、计算年和节气
 *  2、计算当前干支纪年和纪日
 *  3、生成正确的四柱信息
 */

// ------------------------- 这里配置信息，按年写死节气日期 -----------

// 每年过年时间
const yearStartDate = [
    '2025-01-29',
    '2026-02-17'
]
// 换将节气表
const jieqiGroupByYear: Record<number, Array<[string, EarthlyBranch]>> = {
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

// ------------------------- 四柱推算方法 -----------
/**
 * 推算四柱
 * 年柱：从2025.01.29日，乙巳年，春节开始推算，依次记录每年春节日期
 * 月柱：月柱的支是月建，就需要从2025年02月03日立春为寅开始，再利用年上起月法，得到月干
 * 日柱：2025.01.29日，为戊戌日，依次推算,准确日期格式'2025-01-29T23:59:59+08:00'
 * 时柱：按小时计算，得出时支，再使用日上起时法，得出时支
 *
 * 月将：完整记录24节气，除了用于月建，还有用于月将的计算
 */

const yearGanzhiIndex: [HeavenlyStem, EarthlyBranch] = [stems[1], branches[5]]
const dayGanzhiIndex: [HeavenlyStem, EarthlyBranch] = [stems[4], branches[10]]
/** 获取当前时间的四柱信息 */
export function useYmdhInfo(date?: string): {
    y: [HeavenlyStem, EarthlyBranch],
    m: [HeavenlyStem, EarthlyBranch],
    d: [HeavenlyStem, EarthlyBranch],
    h: [HeavenlyStem, EarthlyBranch],
    yuejiang: EarthlyBranch,
    current: Date
} {
    let yearInfo: JiaziLinkType = linkRoot; // 年柱
    let monthInfo: JiaziLinkType = linkRoot; // 月柱
    let dayInfo: JiaziLinkType = linkRoot; // 日柱
    let hourInfo: JiaziLinkType = linkRoot; // 时柱
    let yuejiangInfo: EarthlyBranch = branches[10]; // 月将

    let current = new Date(date ? date : new Date());
    if (isNaN(current.valueOf())) {  // 传入的字符串未正确的格式化出来
        console.log(`使用【${date}】格式化日期错误`)
        current = new Date()
    }
    // 遍历数组，计算年柱
    yearStartDate.some((y, i) => {
        const yd = new Date(y)
        if (current >= yd) {
            // 检测到第一个低于当前日期的年开头,i就作为偏移量
            yearInfo = findNext(yearGanzhiIndex[0], yearGanzhiIndex[1], i)
            return true
        }
    })
    // 计算日期差，得到日柱
    const dayStart = new Date('2025-01-29T23:59:59+08:00')
    dayInfo = findNext(dayGanzhiIndex[0], dayGanzhiIndex[1], Math.ceil((current.getTime() - dayStart.getTime()) / (1000 * 60 * 60 * 24)))
    // 时间分为12份，计算时柱
    const hours = current.getHours()
    const hourGan = _dayToHour(dayInfo)
    if (hours < 1) {
        hourInfo.data = [hourGan[0], branches[0]]
    } else if (hours < 3) {
        hourInfo.data = [hourGan[1], branches[1]]
    } else if (hours < 5) {
        hourInfo.data = [hourGan[2], branches[2]]
    } else if (hours < 7) {
        hourInfo.data = [hourGan[3], branches[3]]
    } else if (hours < 9) {
        hourInfo.data = [hourGan[4], branches[4]]
    } else if (hours < 11) {
        hourInfo.data = [hourGan[5], branches[5]]
    } else if (hours < 13) {
        hourInfo.data = [hourGan[6], branches[6]]
    } else if (hours < 15) {
        hourInfo.data = [hourGan[7], branches[7]]
    } else if (hours < 17) {
        hourInfo.data = [hourGan[8], branches[8]]
    } else if (hours < 19) {
        hourInfo.data = [hourGan[9], branches[9]]
    } else if (hours < 21) {
        hourInfo.data = [hourGan[10], branches[10]]
    } else if (hours < 23) {
        hourInfo.data = [hourGan[11], branches[11]]
    } else { hourInfo.data = [hourGan[0], branches[0]] }
    // 根据节气表，得到月将
    jieqiGroupByYear[current.getFullYear()].some(j => {
        if (current.valueOf() > new Date(j[0]).valueOf()) {
            yuejiangInfo = j[1]
        } else {
            return true
        }
    })
    return {
        y: yearInfo.data,
        m: monthInfo.data,
        d: dayInfo.data,
        h: hourInfo.data,
        yuejiang: yuejiangInfo,
        current: current
    }
}

/**
 * 日上起时法
 * @param d 日干支
 * @returns 
 */
function _dayToHour(d: JiaziLinkType) {
    // - 甲、己：当日子时为甲
    // - 乙、庚：当日子时为丙
    // - 丙、辛：当日子时为戊
    // - 丁、壬：当日子时为庚
    // - 戊、癸：当日子时为壬
    let arr: Array<HeavenlyStem> = []
    if (d.data[0].value === '甲' || d.data[0].value === '己') {
        arr = useTianganList(new StemJia())
    } else if (d.data[0].value === '乙' || d.data[0].value === '庚') {
        arr = useTianganList(new StemBing())
    } else if (d.data[0].value === '丙' || d.data[0].value === '辛') {
        arr = useTianganList(new StemWu())
    } else if (d.data[0].value === '丁' || d.data[0].value === '壬') {
        arr = useTianganList(new StemGeng())
    } else if (d.data[0].value === '戊' || d.data[0].value === '癸') {
        arr = useTianganList(new StemRen())
    } else {
        throw new Error(`日干判断错误：${d.data[0].value}`)
    }
    arr.push(arr[0], arr[1])
    return arr
}