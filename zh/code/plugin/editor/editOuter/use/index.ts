// #图形编辑器 [自定义编辑工具]
import { App, Rect, Box, DragEvent } from 'leafer-ui'
import { EditTool, Editor, registerEditTool } from '@leafer-in/editor'


@registerEditTool()
export class CustomEditTool extends EditTool {

    public get tag() { return 'CustomEditTool' }

    public point: Box

    constructor(editor: Editor) {
        super(editor)

        // 创建控制点
        this.view.add(this.point = new Box()) // 可以添加多个
        this.eventIds = [
            this.point.on_(DragEvent.DRAG, () => { console.log('drag point') })
        ]
    }

    public onLoad(): void {
        this.point.set({ ...this.editBox.getPointStyle(), strokeWidth: 1 })
        this.editBox.add(this.view) // 添加在 editor 或 editBox 中都可以， 注意editBox本身具有定位
    }

    public onUpdate(): void {
        const { boxBounds, worldTransform } = this.editor.element // 单个选中时 element 代表选中的元素
        const { x, y } = boxBounds, { scaleX, scaleY } = worldTransform
        this.point.set({ x: (x + 15) * Math.abs(scaleX), y: (y + 15) * Math.abs(scaleY) })
    }

    public onUnload(): void {
        this.editBox.remove(this.view)
    }

    public onDestroy(): void {
        this.point = null
    }

}


Rect.setEditOuter('CustomEditTool') // 1. 为元素类绑定编辑工具  // [!code hl:4]
// Rect.setEditTool(function (rect: Rect) {
//     return rect.cornerRadius ? 'CustomEditTool' : 'EditTool' // 支持函数
// })


const app = new App({ view: window, editor: {} })

app.tree.addMany(
    Rect.one({ editable: true, fill: '#FEB027', cornerRadius: 20 }, 100, 100),
    Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: 20 }, 300, 100)
)