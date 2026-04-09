// #创建 Pen [结合文字 (App)]
import { App, Pen, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const pen = new Pen() // [!code hl:11]

pen.setStyle({ stroke: '#4DCB71', strokeWidth: 4, strokeAlign: 'inside', editable: true })
pen.roundRect(0, 20, 100, 60, 30)

pen.add(new Text({ x: 60, y: 42, fill: '#4DCB71', fontSize: 16, text: 'ON', editable: true }))

pen.setStyle({ fill: '#4DCB71', editable: true })
pen.arc(30, 50, 23)

app.tree.add(pen)