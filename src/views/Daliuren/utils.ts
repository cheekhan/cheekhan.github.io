import {GanZhi} from "@cheekhan/utils"

type Branch = GanZhi.EarthlyBranch
type  Stem = GanZhi.HeavenlyStem

/**
 * 获取日干遁干
 * @param day
 */
export function getDayToDiPan(day: Stem): Branch {
    const diZhiList = GanZhi.useDizhiList()
    switch (day.id) {
        case 10:
            return diZhiList[1]
        case 1:
            return diZhiList[2]
        case 2:
            return diZhiList[4]
        case 3:
        case 5:
            return diZhiList[5]
        case 4:
        case 6:
            return diZhiList[7]
        case 7:
            return diZhiList[8]
        case 8:
            return diZhiList[10]
        case 9:
            return diZhiList[11]
        default:
            throw new Error(`Unknown day ${day.id}`)

    }

}

/**
 * 根据排盘列表，获取日上 xxx 的文字
 * @param info
 * @param day
 */
export function usePanLabel(
    info: [Branch, Branch | undefined, string | undefined][],
    day: [Stem, Branch]
): string {
    let s = ``;
    const dunGan = getDayToDiPan(day[0])
    s += `${day[0].value}${day[1].value}日，干上`
    info.some((item) => {
        if (item[0].id === dunGan.id) {
            s += `${item[1]?.value}`
            return true
        }
    })
    return s
}