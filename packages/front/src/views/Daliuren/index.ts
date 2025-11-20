import dayjs from "dayjs";
import {ref, computed} from "vue";
import {GanZhi} from "@cheekhan/utils";
import {QiKe, type BranchType} from "./qiKe";

const _currenTime = dayjs();

// 格式化的当前时间
const currentInfo = ref({
    year: String(_currenTime.year()),
    month: String(_currenTime.month() + 1),
    day: String(_currenTime.date()),
    time: _currenTime.format("HH:mm:ss"),
    formate: _currenTime.format(),
});
export {currentInfo};

// 计算时使用的日期
const dateTime = ref(_currenTime.format()); // 日期字符串
const dateTimeInfo = computed(() => GanZhi.useYmdhInfo(dateTime.value)); // 四柱原始信息
const monthIndex = computed(() => dateTimeInfo.value.yuejiang);
export {dateTime, dateTimeInfo, monthIndex};
// 计算贵人所乘
const guiRenOnBranch = computed<GanZhi.EarthlyBranch>(() => {
    const time = dateTimeInfo.value.h[1];
    // 判断昼贵夜贵，来取二维数组
    const mapIndex: 1 | 0 = time.id >= 4 && time.id <= 9 ? 0 : 1;
    const jiangToDi: Array<[number, number]> = [
        [2, 8],
        [1, 9],
        [12, 10],
        [12, 10],
        [2, 8],
        [1, 9],
        [2, 8],
        [7, 3],
        [6, 4],
        [6, 4],
    ];
    const index = dateTimeInfo.value.d[0].id - 1;
    if (!jiangToDi[index]) {
        throw new Error('日干遁干错误')
    }
    const branchID = jiangToDi[index][mapIndex];
    let eb: GanZhi.EarthlyBranch | null = null;
    GanZhi.useDizhiList().some((e) => {
        if (e.id === branchID) {
            eb = e;
            return true;
        }
    });
    if (eb === null) {
        throw new Error("");
    }
    return eb;
});
export {guiRenOnBranch};
// 地支列表，用于下拉选
const diZhiOptions = ref(GanZhi.useDizhiList());
const diZhiSelect = ref(monthIndex.value);
// 是否使用正时
const useHour = ref(true);
export {diZhiOptions, diZhiSelect, useHour};

// 获取课盘信息
export function qiKe(
    indexDi: BranchType,
    indexTian: BranchType,
    indexGui: BranchType,
) {
    const ke = new QiKe(indexDi, indexTian, indexGui);
    ke.useData();
    return ke;
}
