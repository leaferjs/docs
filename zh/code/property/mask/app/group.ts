// #遮罩功能 [将圆形组设为遮罩 (App)]
import { App, Group, Ellipse, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const group = new Group({ x: 100, y: 100 })

const maskGroup = new Group({  // [!code hl:6]
    mask: true
})

maskGroup.add(new Ellipse({ width: 60, height: 60, fill: 'black' }))
maskGroup.add(new Ellipse({ x: 50, y: 50, width: 50, height: 50, fill: 'black' }))

const image = new Image({
    width: 100,
    height: 100,
    url: '/image/leafer.jpg'
})

app.tree.add(group)

group.add([maskGroup, image])   // [!code hl:]