import dayjs from "dayjs";
import type {CurrenTimeInfo} from "./types";

const _currenTime = dayjs();

// 时间格式化
const currentInfo: CurrenTimeInfo = {
    year: String(_currenTime.year()),
    month: String(_currenTime.month() + 1),
    day: String(_currenTime.date()),
    time: _currenTime.format("HH:mm:ss"),
};
// 获取日期
// const useDate = () => _currenTime.toDate();
const useDate = () => _currenTime.format();
export {currentInfo, useDate};
export type {CurrenTimeInfo};


