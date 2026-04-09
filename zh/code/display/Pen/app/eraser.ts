// #创建 Pen [橡皮擦 (App)]
import { App, Group, Rect, DragEvent, Pen } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const group = new Group()
const rect = new Rect({ fill: 'green', width: 400, height: 400, editable: true })
const pen = new Pen({ eraser: true })
pen.setStyle({ stroke: 'red', strokeWidth: 20, width: 20, strokeCap: "round", strokeJoin: "round", editable: true })

group.add(rect)
group.add(pen)
app.tree.add(group)

let x: number
let y: number

group.on('drag', (e: DragEvent) => {
    if (x === undefined) {
        pen.moveTo(e.x, e.y)
        x = e.x
        y = e.y
    }
    x += e.moveX
    y += e.moveY
    pen.lineTo(x, y)
})

group.on('pointer.up', () => {
    x = undefined
})
