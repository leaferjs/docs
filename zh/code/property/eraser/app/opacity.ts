// #擦除功能 [将半透明的圆环设为橡皮擦 (App)]
import { App, Group, Ellipse, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const group = new Group({ x: 100, y: 100, draggable: true })

const image = new Image({
    width: 100,
    height: 100,
    cornerRadius: 30,
    url: '/image/leafer.jpg'
})

const eraser = new Ellipse({ // [!code hl:10]
    x: 15,
    y: 15,
    width: 70,
    height: 70,
    innerRadius: 0.5,
    opacity: 0.5,
    fill: 'black',
    eraser: true
})

app.tree.add(group)

group.add([image, eraser])  // [!code hl]