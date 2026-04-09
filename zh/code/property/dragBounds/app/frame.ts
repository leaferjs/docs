// #限制元素拖动范围 [在 Frame 内拖动 (App)]
import { App, Frame, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {}, fill: '#333' })

const frame = new Frame({
    width: 200,
    height: 200
})

const rect = new Ellipse({
    width: 50,
    height: 50,
    fill: '#32cd79',
    dragBounds: 'parent', // 限制元素拖动范围 // [!code hl]
    draggable: true
})

app.tree.add(frame)
frame.add(rect)