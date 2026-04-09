// #创建 Pen [结合图形组件 (App)]
import { App, Pen, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/corner' // 导入圆角插件

const app = new App({ view: window, editor: {} })

const pen = new Pen() // [!code hl:8]

pen.setStyle({ fill: { type: 'radial', stops: [{ offset: 0, color: '#79CB4D' }, { offset: 1, color: '#FEB027' }] }, editable: true })
pen.roundRect(0, 0, 100, 100, 30)

pen.add(new Ellipse({ x: 20, y: 20, width: 60, height: 60, innerRadius: 0.5, startAngle: -60, endAngle: 180, cornerRadius: 5, fill: 'white', editable: true }))

app.tree.add(pen)