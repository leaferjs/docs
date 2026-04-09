import { App, Star, Box, Group,PointerEvent,DragEvent } from 'leafer-ui'
import { InnerEditor} from '@leafer-in/editor'


export class CustomEditor extends InnerEditor {

    get tag() { return 'CustomEditor' }

    onCreate() {
        this.point = new Box()
        this.closeBtn = new Box({ fill: '#FF4B4B', cornerRadius: 20, around: 'top', cursor: 'pointer', children: [{ tag: 'Text', text: '完成', padding: [10, 20] }] })
        this.view.addMany(this.point, this.closeBtn)
        this.eventIds = [
            this.point.on_(DragEvent.DRAG, () => { console.log('drag point') }),
            this.closeBtn.on_(PointerEvent.TAP, () => { this.editor.closeInnerEditor() }) // 关闭内部编辑器
        ]
    }

    onLoad() {
        this.point.set({ ...this.editBox.getPointStyle(), strokeWidth: 1 })
        this.editBox.add(this.view) // 添加在 editor 或 editBox 中都可以， 注意editBox本身具有定位
    }

    onUpdate() {
        const { boxBounds, worldTransform } = this.editor.element // 单个选中时 element 代表选中的元素
        const { x, y, height } = boxBounds, { scaleX, scaleY } = worldTransform
        this.point.set({ x: (x + 50) * Math.abs(scaleX), y: y * Math.abs(scaleY) })
        this.closeBtn.set({ x: (x + 50) * Math.abs(scaleX), y: (y + height) * Math.abs(scaleY) })
    }

    onUnload() {
        this.editBox.remove(this.view)
    }

    onDestroy() {
        this.point = this.closeBtn = null
    }
}

CustomEditor.registerInnerEditor()


Star.setEditInner('CustomEditor') // 1. 为元素类设置内部编辑器  // [!code hl:4]
// Star.setEditInner(function (star: Rect) {
//     return star.pathInputed ? 'PathEditor' : 'CustomEditor' // 支持函数
// })


const app = new App({ view: window, editor: {} })

app.tree.addMany(
    Star.one({ editable: true, fill: '#FEB027' }, 100, 100),
    Star.one({ editable: true, fill: '#FFE04B' }, 300, 100)
)