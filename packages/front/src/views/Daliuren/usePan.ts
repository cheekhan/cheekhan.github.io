import {
    select,
    arc,
    transition,
    easeLinear,
    type Selection,
    type BaseType,
} from "d3";
import {GanZhi} from "@cheekhan/utils";

// d3 select 方法常见的返回类型
export type D3SelectElement<T extends BaseType> = Selection<
    T,
    unknown,
    null,
    undefined
>;

const diZhiList = GanZhi.useDizhiList();
/**
 * 定义颜色常量
 */
const lightColor = "#363637"; // 辅助性质的颜色，如边框
const jinColor = "#909399";
const shuiColor = "#2A598A";
const muColor = "#4E8E2F";
const huoColor = "#f56c6c";
const tuColor = "#A77730";

export class UsePan {
    private width: number = 493;
    private height: number = 493;
    private container: HTMLElement;
    private svg: D3SelectElement<SVGSVGElement>;
    private diGroup: D3SelectElement<SVGGElement>;
    private tianGroup: D3SelectElement<SVGGElement>;
    private jiangGroup: D3SelectElement<SVGGElement>;
    private infoGroup: D3SelectElement<SVGGElement>;
    private actionLabel?: D3SelectElement<SVGTextElement>;
    private _handleClick: () => void = () => console.log("起课");

    /**
     * 挂载 svg 的容器元素
     * @param container
     */
    constructor(container: HTMLElement) {
        this.container = container;
        // svg容器
        this.svg = select(this.container).append("svg");
        this.svg
            .attr("width", this.width)
            .attr("height", this.height)
            .attr(`viewBox`, `0 0 ${this.width} ${this.height}`);
        const cx = this.width * 0.5;
        const cy = this.height * 0.5;
        // 其他盘的容器
        this.diGroup = this.svg.append("g");
        this.tianGroup = this.svg
            .append("g")
            .attr("transform", `translate(${cx},${cy})`);
        this.jiangGroup = this.svg
            .append("g")
            .attr("transform", `translate(${cx},${cy})`);
        this.infoGroup = this.svg
            .append("g")
            .attr("transform", `translate(${cx},${cy})`);
        this.useDi();
        this.useTian();
        this.useJiang();
        this.action();
    }

    private useDi() {
        // 线，分格间距
        const xScale = 164.3;
        // 两个对角
        this.diGroup
            .append("line")
            .attr("stroke", lightColor)
            .attr("stroke-width", 2)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", this.width)
            .attr("y2", this.height);
        this.diGroup
            .append("line")
            .attr("stroke", lightColor)
            .attr("stroke-width", 2)
            .attr("x1", this.width)
            .attr("y1", 0)
            .attr("x2", 0)
            .attr("y2", this.height);
        //     顶部到底部两条
        this.diGroup
            .append("line")
            .attr("stroke", lightColor)
            .attr("stroke-width", 2)
            .attr("x1", xScale + 16)
            .attr("y1", 0)
            .attr("x2", xScale * 2 - 16)
            .attr("y2", this.height);
        this.diGroup
            .append("line")
            .attr("stroke", lightColor)
            .attr("stroke-width", 2)
            .attr("x1", xScale * 2 - 16)
            .attr("y1", 0)
            .attr("x2", xScale + 16)
            .attr("y2", this.height);
        //     左到右两条
        this.diGroup
            .append("line")
            .attr("stroke", lightColor)
            .attr("stroke-width", 2)
            .attr("x1", 0)
            .attr("y1", xScale + 16)
            .attr("x2", this.width)
            .attr("y2", xScale * 2 - 16);
        this.diGroup
            .append("line")
            .attr("stroke", lightColor)
            .attr("stroke-width", 2)
            .attr("x1", 0)
            .attr("y1", xScale * 2 - 16)
            .attr("x2", this.width)
            .attr("y2", xScale + 16);
        //     添加文字
        this.diGroup
            .append("text")
            .attr("x", this.width / 2 - 10)
            .attr("y", this.height - 15)
            .attr("fill", shuiColor)
            .text("子")
            .attr("font-size", 20)
            .attr("font-weight", "bold");
        this.diGroup
            .append("text")
            .attr("x", xScale / 2 - 10)
            .attr("y", this.height - 30)
            .attr("fill", tuColor)
            .text("丑")
            .attr("font-size", 20)
            .attr("font-weight", "bold");
        this.diGroup
            .append("text")
            .attr("x", 15)
            .attr("y", xScale * 2.5)
            .attr("fill", muColor)
            .text("寅")
            .attr("font-size", 20)
            .attr("font-weight", "bold");
        this.diGroup
            .append("text")
            .attr("x", 15)
            .attr("y", xScale * 1.5 + 10)
            .attr("fill", muColor)
            .text("卯")
            .attr("font-size", 20)
            .attr("font-weight", "bold");
        this.diGroup
            .append("text")
            .attr("x", 15)
            .attr("y", xScale * 0.7)
            .attr("fill", tuColor)
            .text("辰")
            .attr("font-size", 20)
            .attr("font-weight", "bold");
        this.diGroup
            .append("text")
            .attr("x", xScale / 2 - 10)
            .attr("y", 50)
            .attr("fill", huoColor)
            .text("巳")
            .attr("font-size", 20)
            .attr("font-weight", "bold");
        this.diGroup
            .append("text")
            .attr("x", this.width / 2 - 10)
            .attr("y", 30)
            .attr("fill", huoColor)
            .text("午")
            .attr("font-size", 20)
            .attr("font-weight", "bold");
        this.diGroup
            .append("text")
            .attr("x", xScale * 2.5)
            .attr("y", 50)
            .attr("fill", tuColor)
            .text("未")
            .attr("font-size", 20)
            .attr("font-weight", "bold");
        this.diGroup
            .append("text")
            .attr("x", this.width - 35)
            .attr("y", xScale * 0.7)
            .attr("fill", jinColor)
            .text("申")
            .attr("font-size", 20)
            .attr("font-weight", "bold");
        this.diGroup
            .append("text")
            .attr("x", this.width - 35)
            .attr("y", xScale * 1.5 + 10)
            .attr("fill", jinColor)
            .text("酉")
            .attr("font-size", 20)
            .attr("font-weight", "bold");
        this.diGroup
            .append("text")
            .attr("x", this.width - 35)
            .attr("y", xScale * 2.5)
            .attr("fill", tuColor)
            .text("戌")
            .attr("font-size", 20)
            .attr("font-weight", "bold");
        this.diGroup
            .append("text")
            .attr("x", xScale * 2.5)
            .attr("y", this.height - 30)
            .attr("fill", shuiColor)
            .text("亥")
            .attr("font-size", 20)
            .attr("font-weight", "bold");
        //     寄宫文字
        this.diGroup
            .append("text")
            .attr("x", 30)
            .attr("y", xScale * 2.5)
            .attr("fill", muColor)
            .text("（甲）")
            .attr("font-size", 18);
        this.diGroup
            .append("text")
            .attr("x", 35)
            .attr("y", xScale * 0.7)
            .attr("fill", muColor)
            .text("（乙）")
            .attr("font-size", 18);
        this.diGroup
            .append("text")
            .attr("x", xScale / 2 + 5)
            .attr("y", 50)
            .attr("fill", huoColor)
            .text("（丙、")
            .attr("font-size", 18);
        this.diGroup
            .append("text")
            .attr("x", xScale / 2 + 55)
            .attr("y", 50)
            .attr("fill", tuColor)
            .text("戊）")
            .attr("font-size", 18);
        this.diGroup
            .append("text")
            .attr("x", xScale * 2)
            .attr("y", 50)
            .attr("fill", huoColor)
            .text("（丁、")
            .attr("font-size", 18);
        this.diGroup
            .append("text")
            .attr("x", xScale * 2 + 50)
            .attr("y", 50)
            .attr("fill", tuColor)
            .text("己）")
            .attr("font-size", 18);
        this.diGroup
            .append("text")
            .attr("x", this.width - 80)
            .attr("y", xScale * 0.7)
            .attr("fill", jinColor)
            .text("（庚）")
            .attr("font-size", 18);
        this.diGroup
            .append("text")
            .attr("x", this.width - 80)
            .attr("y", xScale * 2.5)
            .attr("fill", jinColor)
            .text("（辛）")
            .attr("font-size", 18);
        this.diGroup
            .append("text")
            .attr("x", xScale * 2.5 - 50)
            .attr("y", this.height - 30)
            .attr("fill", shuiColor)
            .text("（壬）")
            .attr("font-size", 18);
        this.diGroup
            .append("text")
            .attr("x", xScale / 2 + 5)
            .attr("y", this.height - 30)
            .attr("fill", shuiColor)
            .text("（癸）")
            .attr("font-size", 18);
    }

    private useTian() {
        /**
         * 获取五行色
         * @param d
         */
        const color = (d: GanZhi.EarthlyBranch) => {
            switch (d.wuXing) {
                case GanZhi.WuXing.Shui:
                    return shuiColor;
                case GanZhi.WuXing.Mu:
                    return muColor;
                case GanZhi.WuXing.Huo:
                    return huoColor;
                case GanZhi.WuXing.Tu:
                    return tuColor;
                default:
                    return jinColor;
            }
        };
        /**
         * 获取角度
         * @param branch
         */
        const getAngle = (branch: GanZhi.EarthlyBranch) => {
            const stepAngle = Math.PI / 6;
            const startAngle = Math.PI - stepAngle / 2 + stepAngle * (branch.id - 1);
            return {
                startAngle: startAngle,
                endAngle: startAngle + stepAngle,
            };
        };
        /**
         * 绘制弧形
         * @param branch
         */
        const useArc = (branch: GanZhi.EarthlyBranch) => {
            const path = arc().padAngle(0.008)({
                innerRadius: this.width / 2 - 100,
                outerRadius: this.width / 2 - 50,
                ...getAngle(branch),
            });
            return (
                this.tianGroup
                    .append("path")
                    // .attr("transform", `translate(${this.width / 2},${this.height / 2})`)
                    .attr("d", path)
            );
        };
        /**
         * 绘制地支文字
         * @param branch
         */
        const useLabel = (branch: GanZhi.EarthlyBranch) => {
            const dy = this.width * 0.5 - 80;
            this.tianGroup
                .append("text")
                .attr("x", -10)
                .attr("y", 8)
                .attr("transform", `rotate(${30 * (branch.id - 1)}) translate(0,${dy})`)
                .attr("fill", "#dfdfd6")
                .text(branch.value)
                .attr("font-size", 20)
                .attr("font-weight", "bold");
        };
        diZhiList.forEach((b) => {
            useArc(b).attr("fill", color(b));
        });
        diZhiList.forEach((b) => {
            useLabel(b);
        });
    }

    /**
     * 绘制将
     * @param asc 是否升序，即从小到大
     */
    private useJiang(asc: boolean = true) {
        const list = [
            "螣蛇",
            "朱雀",
            "六合",
            "勾陈",
            "青龙",
            "天空",
            "白虎",
            "太常",
            "玄武",
            "太阴",
            "天后",
        ];
        const listHead = "贵人";
        if (asc) {
            list.unshift(listHead);
        } else {
            list.reverse().unshift(listHead);
        }
        /**
         * 获取角度
         * @param index
         */
        const getAngle = (index: number) => {
            const stepAngle = Math.PI / 6;
            const startAngle = Math.PI - stepAngle / 2 + stepAngle * index;
            return {
                startAngle: startAngle,
                endAngle: startAngle + stepAngle,
            };
        };
        /**
         * 绘制弧形
         * @param index
         */
        const useArc = (index: number) => {
            const path = arc().padAngle(0.008)({
                innerRadius: this.width / 2 - 150,
                outerRadius: this.width / 2 - 100,
                ...getAngle(index),
            });
            return this.jiangGroup.append("path").attr("d", path);
        };
        /**
         * 绘制文字
         * @param index
         * @param label
         */
        const useLabel = (label: string, index: number) => {
            const dy = this.width / 2 - 70 - 60;
            this.jiangGroup
                .append("text")
                .attr("x", -16)
                .attr("y", 8)
                .attr("transform", `rotate(${30 * index} ) translate(0,${dy})`) //
                .attr("fill", "#dfdfd6")
                .text(label)
                .attr("font-size", 16);
        };
        list.forEach((_, i) => {
            useArc(i);
        });
        list.forEach((b, i) => {
            useLabel(b, i);
        });
    }

    /**
     * 操作区域，有按钮，和其他装饰
     * @private
     */
    private action() {
        this.infoGroup
            .append("circle")
            .attr("r", this.width / 2 - 150)
            .attr("fill", "#18222B")
            .attr("stroke", lightColor);
        this.actionLabel = this.infoGroup
            .append("text")
            .text("甲子日，干上卯")
            .attr("text-anchor", "middle")
            .attr("dy", -10)
            .attr("font-size", 18)
            .attr("font-weight", "bold")
            .attr("fill", "#409EFF");
        this.infoGroup
            .append("text")
            .text("起课")
            .attr("text-anchor", "middle")
            .attr("dy", 46)
            .attr("font-size", 18)
            .attr("font-weight", "bold")
            .attr("fill", "#ffffff");
        this.infoGroup
            .append("rect")
            .attr("x", -55)
            .attr("y", 20)
            .attr("width", 110)
            .attr("height", 40)
            .attr("fill", "#409EFF99")
            .attr("stroke", "#409EFF")
            .attr("stroke-width", 2)
            .attr("rx", "5")
            .classed("svg-rect-hover", true)
            .on("click", () => {
                this._handleClick();
            });
    }

    /**
     * 处理起课方法
     * @param fn
     */
    handleClick(fn: () => void): void {
        this._handleClick = fn;
    }

    /**
     * 起课
     * @param month 月将
     * @param hour 加时
     * @param dayGan 日,日干
     * @param time 时辰
     */
    handleStart(
        month: GanZhi.EarthlyBranch,
        hour: GanZhi.EarthlyBranch,
        dayGan: GanZhi.HeavenlyStem,
        time: GanZhi.EarthlyBranch,
    ): void {
        const angle = -30 * (month.id - hour.id);
        const t = transition().duration(750).ease(easeLinear);
        const cx = this.width * 0.5;
        const cy = this.height * 0.5;
        this.tianGroup
            .transition(t)
            .attr("transform", `translate(${cx},${cy}) rotate(${angle})`);
        // 贵人对应天盘地支
        // |甲戊庚	|丑|	未|
        // |乙己	|子|	申|
        // |丙丁	|亥|	酉|
        // |壬癸	|巳|	卯|
        // |六辛日	|午|	寅|
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
        let mapIndex: 1 | 0 = 1; // 判断昼贵夜贵，来取二维数组
        if (time.id >= 4 && time.id <= 9) {
            mapIndex = 0;
        }
        const angleGui =
            -30 * (1 - (jiangToDi[dayGan.id - 1] || [2, 8])[mapIndex]) + angle; // 将盘角度
        this.jiangGroup
            .transition(t)
            .attr("transform", `translate(${cx},${cy}) rotate(${angleGui})`);

        // 计算贵人顺逆
        // 贵人乘神ID：      (jiangToDi[dayGan.id - 1] || [2, 8])[mapIndex]
        // 月将id：month.id
        // 对应到加时ID：hour.id
        // 贵人乘神ID - 月将id = 偏差
        // 加时+偏差，就是贵人所临
        const shunNiID =
            hour.id + (jiangToDi[dayGan.id - 1] || [2, 8])[mapIndex] - month.id;
        this.jiangGroup.selectChildren().remove();
        if (shunNiID >= 4 && shunNiID <= 9) {
            // 顺
            this.useJiang();
        } else {
            this.useJiang(false);
        }
    }

    updateActiveLabel(label: string) {
        this.actionLabel?.text(label);
    }
}
