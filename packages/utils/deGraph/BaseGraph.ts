import type { Selection } from "d3"
import { select } from "d3"
/** ------------------------------- 图形节点的定义 -------------------------------------- */
// 图事件类型枚举
enum ShapeEventType {
    NodeMouseEnter, // 鼠标进入节点事件
    NodeMouseLeave, // 鼠标离开节点事件
    NodeClick, // 鼠标点击节点事件
}
interface ShapeConfig {
    id: string; // 元素id 
    data?: any; // 元素绑定的数据 
}
/**
 * 
 * 图形基类
 * 
 */
abstract class BaseShape<T> {
    protected id: string; // 元素id  
    protected data: T; // 元素绑定的数据
    protected graphInstance: BaseGraph; // 图实例
    protected root?: Selection<any, any, any, any>; // 图形的根元素
    protected style: Map<string, string> = new Map(); // 样式
    protected attr: Map<string, string> = new Map(); // 属性
    protected isRender: boolean = false; // 是否已经渲染
    protected eventList: Map<ShapeEventType, Function[]> = new Map(); // 事件列表
    // 构造函数
    constructor(config: ShapeConfig, graphInstance: BaseGraph) {
        this.id = config.id;
        this.data = config.data;
        this.graphInstance = graphInstance;
    }
    /** 将元素，渲染到图上 */
    abstract mount(): void;
    abstract update(...args: any[]): void;
    /** 判断是否有这个元素 */
    isShape(id: string): boolean {
        return this.id === id;
    }
}
export { BaseShape }
export type { ShapeEventType, ShapeConfig }

/** ------------------------------- 图的定义 -------------------------------------- */
type GraphSvg = Selection<SVGSVGElement, any, any, any>;// svg 容器
type GraphGroup = Selection<SVGGElement, any, any, any>; // 图的g元素
interface GraphConfig {
    graphId: string | HTMLElement; // 图容器 
    width: number; // 图宽度
    height: number; // 图高度
}
abstract class BaseGraph {
    protected graphData: Map<string, BaseShape<any>> = new Map(); // 图数据
    private svg: GraphSvg; // svg的g元素
    protected graphConfig: GraphConfig; // 图配置
    protected graphGroup: GraphGroup; // 图的g元素,对外暴露的元素，用于以后的动画
    constructor(config: GraphConfig) {
        this.graphConfig = config;
        // 初始化svg 容器
        if (typeof config.graphId === "string") {
            this.svg = select(`#${config.graphId}`).append("svg")
        } else {
            this.svg = select(config.graphId).append("svg");
        }
        this.svg.attr("width", config.width).attr("height", config.height);
        this.graphGroup = this.svg.append("g");
    }
    getGraphGroup(): GraphGroup {
        return this.graphGroup;
    }
    /** 将图，渲染到图上 */
    render() {
        for (let shape of this.graphData.values()) {
            shape.mount();
        }
    }
    abstract addNode(nodeEntry: any): void;
    abstract removeNode(id: string): void;
    abstract updateNode(nodeEntry: any): void;
    getNode(id: string): BaseShape<any> | undefined {
        return this.graphData.get(id);
    }
    /** 批量增加节点 */
    addNodes(nodeEntries: any[]): void {
        nodeEntries.forEach(nodeEntry => this.addNode(nodeEntry));
    }
    /** 为图绑定事件 */
    abstract on(eventType: ShapeEventType, callback: Function): void;

}
export { BaseGraph }
export type { GraphConfig, GraphGroup }


