// #创建 Pen [画出不同颜色的形状 (App)]
import { App, Pen } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const pen = new Pen() // [!code hl:9]

pen.setStyle({ fill: '#FF4B4B', windingRule: 'evenodd', editable: true })
pen.roundRect(0, 0, 100, 100, 30).arc(50, 50, 25)

pen.setStyle({ x: 50, y: 50, fill: '#FEB027', editable: true })
pen.arc(0, 0, 20)

app.tree.add(pen)