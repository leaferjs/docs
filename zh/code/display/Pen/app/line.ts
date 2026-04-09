// #创建 Pen [画曲线 (App)]
import { App, Pen } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const pen = new Pen() // [!code hl:9]

pen.setStyle({ fill: { type: 'radial', stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 1, color: '#FEB027' }] }, editable: true })
pen.roundRect(0, 0, 100, 100, 30)

pen.setStyle({ y: -5, fill: 'white', editable: true })
pen.moveTo(40, 30).bezierCurveTo(70, 30, 90, 60, 63, 80).quadraticCurveTo(50, 88, 40, 80).bezierCurveTo(10, 60, 50, 40, 40, 30)

app.tree.add(pen)