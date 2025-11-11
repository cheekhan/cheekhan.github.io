import stems, { HeavenlyStem } from "./tianGan"
import branches, { EarthlyBranch } from "./diZhi"
// 甲子组成的链表
export type JiaziLinkType = {
    data: [HeavenlyStem, EarthlyBranch],
    next: JiaziLinkType | null
}
/** 创建链表 */
const _createLink = () => {
    let root: JiaziLinkType = { data: [stems[0], branches[0]], next: null }
    let i = 0;
    let head: JiaziLinkType | null = null;
    let s = 1, b = 1;
    while (i < 60) {
        if (s >= 10) s = 0
        if (b >= 12) b = 0
        if (head) {
            const node: JiaziLinkType = {
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
// 甲子环的入口节点
export const linkRoot = _createLink()

// ---------------------   工具函数 ------------------------  

/** 获取下一个干支组合 */
export function findNext(stem: HeavenlyStem, branch: EarthlyBranch, step: number = 1) {
    let head: JiaziLinkType | null = linkRoot
    if (head) {
        while (head) {
            if (head.data[0].value === stem.value && head.data[1].value === branch.value) {
                break
            }
            head = head.next
        }
    }
    if (head === null) {
        throw new Error(`甲子组合错误：${stem.value},${branch.value}`,)
    }
    while (step > 0) {
        if (head && head.next) {
            head = head.next
        } else {
            head = linkRoot
        }
        step -= 1
    }
    return head
}

/**
 * 没用到的函数
 * 
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
 * 
 * 
 */