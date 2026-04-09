// #创建 Pen [结合图片 (App)]
import { App, Pen } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const pen = new Pen() // [!code hl:9]

pen.setStyle({ fill: { type: 'radial', stops: [{ offset: 0, color: '#4DCB71' }, { offset: 1, color: '#79CB4D' }] }, windingRule: 'evenodd', editable: true })
pen.roundRect(0, 0, 100, 100, 30).arc(50, 50, 25)

pen.setStyle({ fill: { type: 'image', url: '/image/leafer.jpg' }, editable: true })
pen.arc(50, 50, 20)

app.tree.add(pen)