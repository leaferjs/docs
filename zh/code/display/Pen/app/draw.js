// #画笔工具示例 (App)
import { App, DragEvent, Pen } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: { boxSelect: false }, fill: '#333' })

app.tree.add({ tag: 'Text', x: 100, y: 100, text: '按下鼠标拖动开始画线，抬起结束', fill: '#999', fontSize: 16 })

const pen = new Pen()
app.tree.add(pen)

// 按下鼠标拖动开始画线，抬起结束，当缩放平移视图后，仍然可以准确绘制新的线条
app.tree.on(DragEvent.START, (e) => {
    const inner = e.getPagePoint() // 转换事件为 page 坐标 = pen.getPagePoint(e)  // [!code hl]
    pen.setStyle({ stroke: '#32cd79', strokeWidth: 10, strokeCap: 'round', strokeJoin: 'round', editable: true })
    pen.moveTo(inner.x, inner.y)
})

app.tree.on(DragEvent.DRAG, (e) => {
    const inner = e.getPagePoint() // 转换事件为 page 坐标 = pen.getPagePoint(e)  // [!code hl]
    pen.lineTo(inner.x, inner.y)
})