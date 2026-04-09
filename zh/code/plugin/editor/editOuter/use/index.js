import { App, Rect, Box, DragEvent } from 'leafer-ui'
import { EditTool, registerEditTool } from '@leafer-in/editor'


export class CustomEditTool extends EditTool {

    get tag() { return 'CustomEditTool' }

    onCreate() { 
        this.view.add(this.point = new Box()) // 可以添加多个
        this.eventIds = [
            this.point.on_(DragEvent.DRAG, () => { console.log('drag point') })
        ]
    }

    onLoad() { 
        this.point.set({ ...this.editBox.getPointStyle(), strokeWidth: 1 })
        this.editBox.add(this.view) // 添加在 editor 或 editBox 中都可以， 注意editBox本身具有定位
    }

    onUpdate() {   
        const { boxBounds, worldTransform } = this.editor.element // 单个选中时 element 代表选中的元素
        const { x, y } = boxBounds, { scaleX, scaleY } = worldTransform
        this.point.set({ x: (x + 15) * Math.abs(scaleX), y: (y + 15) * Math.abs(scaleY) })
    }

    onUnload() {  
        this.editBox.remove(this.view)
    }

    onDestroy() {
       this.point = null
    }

}

CustomEditTool.registerEditTool() 


Rect.setEditOuter('CustomEditTool') // 1. 为元素类绑定编辑工具  // [!code hl:4]
// Rect.setEditTool(function (rect: Rect) {
//     return rect.cornerRadius ? 'CustomEditTool' : 'EditTool' // 支持函数
// })


const app = new App({ view: window, editor: {} })

app.tree.addMany(
    Rect.one({ editable: true, fill: '#FEB027', cornerRadius: 20 }, 100, 100),
    Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: 20 }, 300, 100)
)