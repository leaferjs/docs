// #原点 [设置原点在中心 (App)]
import { App, Rect, Frame } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({ // [!code hl:9]
    x: 25,
    y: 25,
    width: 50,
    height: 50,
    origin: 'center', // 设置原点在中心
    draggable: true,
    fill: '#4DCB71'
})

app.tree.add(new Frame({ width: 100, height: 100, fill: '#FF4A2C', children: [rect] }))