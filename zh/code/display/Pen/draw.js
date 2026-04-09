// #画笔工具示例
import { Leafer, DragEvent, Pen } from 'leafer-ui'
import '@leafer-in/viewport'

const leafer = new Leafer({ view: window, type: 'design', fill: '#333', })

leafer.add({ tag: 'Text', x: 100, y: 100, text: '按下鼠标拖动开始画线，抬起结束', fill: '#999', fontSize: 16 })

const pen = new Pen()
leafer.add(pen)

// 按下鼠标拖动开始画线，抬起结束，当缩放平移视图后，仍然可以准确绘制新的线条
leafer.on(DragEvent.START, (e) => {
    const inner = e.getPagePoint() // 转换事件为 page 坐标 = pen.getPagePoint(e)  // [!code hl]
    pen.setStyle({ stroke: '#32cd79', strokeWidth: 10, strokeCap: 'round', strokeJoin: 'round' })
    pen.moveTo(inner.x, inner.y)
})

leafer.on(DragEvent.DRAG, (e) => {
    const inner = e.getPagePoint() // 转换事件为 page 坐标 = pen.getPagePoint(e)  // [!code hl]
    pen.lineTo(inner.x, inner.y)
})