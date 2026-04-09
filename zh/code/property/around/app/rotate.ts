// #around 属性 [围绕坐标(50,50) 为中心旋转 45 度 (App)]
import { App, Rect, Frame } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    around: 'center', // [!code hl:2]
    rotation: 45,
    fill: '#4DCB71',
    draggable: true
})

app.tree.add(new Frame({ width: 100, height: 100, fill: '#FF4A2C', children: [rect] }))