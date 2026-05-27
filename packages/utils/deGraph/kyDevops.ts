/**
 * 运维态势
 * 
 * 所需图形：文本、带箭头直线、图片
 * 
 */
import { BaseGraph, BaseShape, } from "./BaseGraph"
import type { ShapeConfig, ShapeEventType } from "./BaseGraph"

enum NodesType {
    Text,
    Line,
    Image,
}
// 文本节点
interface TextShapeConfig extends ShapeConfig {
    text?: string; // 文本内容
    color?: string; // 文本颜色
    fontSize?: number; // 字体大小
}
class TextShape<T> extends BaseShape<T> {
    private text: string; // 文本内容 
    constructor(config: TextShapeConfig, graphInstance: BaseGraph) {
        super(config, graphInstance);
        this.text = config.text || "";
        const color = config.color || "black";
        const fontSize = config.fontSize || 14;
        this.attr.set('fill', color);
        this.style.set('font-size', `${fontSize}px`);
    }
    mount(): void {
        this.root = this.graphInstance.getGraphGroup().append("text")
            .attr("fill", this.attr.get('fill')!)
            .style("font-size", this.style.get('font-size')!)
            .text(this.text);
        this.isRender = true;
    }
    update(config: TextShapeConfig): void {
        if (config.text !== undefined) {
            this.text = config.text;
        }
        if (config.color !== undefined) {
            this.attr.set('fill', config.color);
        }
        if (config.fontSize !== undefined) {
            this.style.set('font-size', `${config.fontSize}px`);
        }
    }
}

class LineShape<T> extends BaseShape<T> {
    mount(): void {
        throw new Error("Method not implemented.");
    }
    update(...args: any[]): void {
        throw new Error("Method not implemented.");
    }
}

class ImageShape<T> extends BaseShape<T> {
    mount(): void {
        throw new Error("Method not implemented.");
    }
    update(...args: any[]): void {
        throw new Error("Method not implemented.");
    }
}
// 态势图中，节点的数据结构
interface DevopsGraphNodeEntry extends ShapeConfig {
    type: NodesType,
    [key: string]: any,
}
class DevopsGraph extends BaseGraph {
    addNode(nodeEntry: DevopsGraphNodeEntry): void {
        throw new Error("Method not implemented.");
    }
    removeNode(id: string): void {
        throw new Error("Method not implemented.");
    }
    updateNode(nodeEntry: DevopsGraphNodeEntry): void {
        throw new Error("Method not implemented.");
    }
    on(eventType: ShapeEventType, callback: Function): void {
        throw new Error("Method not implemented.");
    }
}

export { DevopsGraph, TextShape, LineShape, ImageShape }