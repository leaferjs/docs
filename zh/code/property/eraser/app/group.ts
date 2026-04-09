// #擦除功能 [将圆形组设为橡皮擦 (App)]
import { App, Group, Ellipse, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const group = new Group({ x: 100, y: 100 })

const eraserGroup = new Group({  // [!code hl:6]
    x: 20,
    y: 20,
    eraser: true
})

eraserGroup.add(new Ellipse({ width: 40, height: 40, fill: 'black' }))
eraserGroup.add(new Ellipse({ x: 30, y: 30, width: 30, height: 30, fill: 'black' }))

const image = new Image({
    width: 100,
    height: 100,
    cornerRadius: 30,
    url: '/image/leafer.jpg'
})

app.tree.add(group)

group.add([image, eraserGroup])  // [!code hl]