import { Box, DragEvent } from 'leafer-ui'
import { EditTool, Editor, registerEditTool } from '@leafer-in/editor'


@registerEditTool()
export class CustomEditTool extends EditTool {

    public get tag() { return 'CustomEditTool' }

    public point: Box

    constructor(editor: Editor) {
        super(editor)

        // 1. 创建控制点 // [!code hl:5]
        this.view.add(this.point = new Box()) // 可以添加多个
        this.eventIds = [
            this.point.on_(DragEvent.DRAG, () => { console.log('drag point') })
        ]
    }

    public onLoad(): void { // 2. 载入控制点  // [!code hl:4]
        this.point.set({ ...this.editBox.getPointStyle(), strokeWidth: 1 })
        this.editBox.add(this.view) // 添加在 editor 或 editBox 中都可以， 注意editBox本身具有定位
    }

    public onUpdate(): void {   // 3. 更新控制点  // [!code hl:5]
        const { boxBounds, worldTransform } = this.editor.element // 单个选中时 element 代表选中的元素
        const { x, y } = boxBounds, { scaleX, scaleY } = worldTransform
        this.point.set({ x: (x + 15) * Math.abs(scaleX), y: (y + 15) * Math.abs(scaleY) })
    }

    public onUnload(): void {  // 4. 卸载控制点  // [!code hl:3]
        this.editBox.remove(this.view)
    }

    public onDestroy(): void {
        this.point = null
    }

}