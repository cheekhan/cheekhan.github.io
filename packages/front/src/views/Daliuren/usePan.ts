/**
 *
 */
import {select, type Selection, type BaseType} from "d3"
// d3 select 方法常见的返回类型
export type D3SelectElement<T extends BaseType> = Selection<T, unknown, null, undefined>

/**
 * 定义颜色常量
 */
const lightColor = '#363637' // 辅助性质的颜色，如边框
const jinColor = '#909399';
const shuiColor = '#2A598A';
const muColor = '#4E8E2F';
const huoColor = '#f56c6c';
const tuColor = '#A77730';

export class UsePan {
    private width: number = 493;
    private height: number = 493;
    private container: HTMLElement;
    private svg: D3SelectElement<SVGSVGElement>;
    private diGroup: D3SelectElement<SVGGElement>;
    private tianGroup: D3SelectElement<SVGGElement>;
    private jiangGroup: D3SelectElement<SVGGElement>;

    /**
     * 挂载 svg 的容器元素
     * @param container
     */
    constructor(container: HTMLElement) {
        this.container = container;
        this.init()
        this.useDipan()
        this.useTian()
        // this.useJiang()
        // this.action()
    }

    private init() {
        const svg: D3SelectElement<SVGSVGElement> = select(this.container).append("svg");
        svg.attr("width", this.width)
            .attr("height", this.height)
            .attr(`viewBox`, `0 0 ${this.width} ${this.height}`);
        const diGroup = svg.append("g");
        const tianGroup = svg.append("g");
        const jiangGroup = svg.append("g");
        this.svg = svg;
        this.diGroup = diGroup;
        this.tianGroup = tianGroup;
        this.jiangGroup = jiangGroup;
    }

    private useDipan() {
        // 线，分格间距 165
        // 两个对角
        this.diGroup.append('line').attr('stroke', lightColor).attr('stroke-width', 2)
            .attr('x1', 0).attr('y1', 0)
            .attr('x2', this.width).attr('y2', this.height)
        this.diGroup.append('line').attr('stroke', lightColor).attr('stroke-width', 2)
            .attr('x1', this.width).attr('y1', 0)
            .attr('x2', 0).attr('y2', this.height)
        //     顶部到底部两条
        this.diGroup.append('line').attr('stroke', lightColor).attr('stroke-width', 2)
            .attr('x1', 165).attr('y1', 0)
            .attr('x2', 165 * 2).attr('y2', this.height)
        this.diGroup.append('line').attr('stroke', lightColor).attr('stroke-width', 2)
            .attr('x1', 165 * 2).attr('y1', 0)
            .attr('x2', 165).attr('y2', this.height)
        //     左到右两条
        this.diGroup.append('line').attr('stroke', lightColor).attr('stroke-width', 2)
            .attr('x1', 0).attr('y1', 165)
            .attr('x2', this.width).attr('y2', 165 * 2)
        this.diGroup.append('line').attr('stroke', lightColor).attr('stroke-width', 2)
            .attr('x1', 0).attr('y1', 165 * 2)
            .attr('x2', this.width).attr('y2', 165)
        //     添加文字
        this.diGroup.append('text')
            .attr('x', this.width / 2 - 10).attr('y', this.height - 15)
            .attr('fill', shuiColor).text("子")
            .attr('font-size', 20).attr('font-weight', 'bold')
        this.diGroup.append('text')
            .attr('x', 165 / 2 - 10).attr('y', this.height - 30)
            .attr('fill', tuColor).text("丑")
            .attr('font-size', 20).attr('font-weight', 'bold')
        this.diGroup.append('text')
            .attr('x', 15).attr('y', 165 * 2.5)
            .attr('fill', muColor).text("寅")
            .attr('font-size', 20).attr('font-weight', 'bold')
        this.diGroup.append('text')
            .attr('x', 15).attr('y', 165 * 1.5 + 10)
            .attr('fill', muColor).text("卯")
            .attr('font-size', 20).attr('font-weight', 'bold')
        this.diGroup.append('text')
            .attr('x', 15).attr('y', 165 * 0.7)
            .attr('fill', tuColor).text("辰")
            .attr('font-size', 20).attr('font-weight', 'bold')
        this.diGroup.append('text')
            .attr('x', 165 / 2 - 10).attr('y', 50)
            .attr('fill', huoColor).text("巳")
            .attr('font-size', 20).attr('font-weight', 'bold')
        this.diGroup.append('text')
            .attr('x', this.width / 2 - 10).attr('y', 30)
            .attr('fill', huoColor).text("午")
            .attr('font-size', 20).attr('font-weight', 'bold')
        this.diGroup.append('text')
            .attr('x', 165 * 2.5).attr('y', 50)
            .attr('fill', tuColor).text("未")
            .attr('font-size', 20).attr('font-weight', 'bold')
        this.diGroup.append('text')
            .attr('x', this.width - 35).attr('y', 165 * 0.7)
            .attr('fill', jinColor).text("申")
            .attr('font-size', 20).attr('font-weight', 'bold')
        this.diGroup.append('text')
            .attr('x', this.width - 35).attr('y', 165 * 1.5 + 10)
            .attr('fill', jinColor).text("酉")
            .attr('font-size', 20).attr('font-weight', 'bold')
        this.diGroup.append('text')
            .attr('x', this.width - 35).attr('y', 165 * 2.5)
            .attr('fill', tuColor).text("戌")
            .attr('font-size', 20).attr('font-weight', 'bold')
        this.diGroup.append('text')
            .attr('x', 165 * 2.5).attr('y', this.height - 30)
            .attr('fill', shuiColor).text("亥")
            .attr('font-size', 20).attr('font-weight', 'bold')
        //     寄宫文字
        this.diGroup.append('text')
            .attr('x', 30).attr('y', 165 * 2.5)
            .attr('fill', muColor).text("（甲）")
            .attr('font-size', 18)
        this.diGroup.append('text')
            .attr('x', 35).attr('y', 165 * 0.7)
            .attr('fill', muColor).text("（乙）")
            .attr('font-size', 18)
        this.diGroup.append('text')
            .attr('x', 165 / 2 + 5).attr('y', 50)
            .attr('fill', huoColor).text("（丙、")
            .attr('font-size', 18)
        this.diGroup.append('text')
            .attr('x', 165 / 2 + 55).attr('y', 50)
            .attr('fill', tuColor).text("戊）")
            .attr('font-size', 18)
        this.diGroup.append('text')
            .attr('x', 165 * 2).attr('y', 50)
            .attr('fill', huoColor).text("（丁、")
            .attr('font-size', 18)
        this.diGroup.append('text')
            .attr('x', 165 * 2+50).attr('y', 50)
            .attr('fill', tuColor).text("己）")
            .attr('font-size', 18)
        this.diGroup.append('text')
            .attr('x', this.width - 80).attr('y', 165 * 0.7)
            .attr('fill', jinColor).text("（庚）")
            .attr('font-size', 18)
        this.diGroup.append('text')
            .attr('x', this.width - 80).attr('y', 165 * 2.5)
            .attr('fill', jinColor).text("（辛）")
            .attr('font-size', 18)
        this.diGroup.append('text')
            .attr('x', 165 * 2.5 - 50).attr('y', this.height - 30)
            .attr('fill', shuiColor).text("（壬）")
            .attr('font-size', 18)
        this.diGroup.append('text')
            .attr('x', 165 / 2 + 5).attr('y', this.height - 30)
            .attr('fill', shuiColor).text("（癸）")
            .attr('font-size', 18)

    }

    private useTian() {
        this.tianGroup.append('circle')
            .attr('cx', this.width / 2)
            .attr('cy', this.height / 2)
            .attr('r', this.width / 2 - 50)
    }

    private useJiang() {
        this.jiangGroup.append('circle')
            .attr('cx', this.width / 2)
            .attr('cy', this.height / 2)
            .attr('r', this.width / 2 - 100)
            .attr('fill', lightColor)
    }

    /**
     * 操作区域，有按钮，和其他装饰
     * @private
     */
    private action() {
        this.jiangGroup.append('circle')
            .attr('cx', this.width / 2)
            .attr('cy', this.height / 2)
            .attr('r', this.width / 2 - 150)
    }
}

