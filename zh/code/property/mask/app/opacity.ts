// #遮罩功能 [将半透明的圆环设为遮罩 (App)]
import { App, Group, Ellipse, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const group = new Group({ x: 100, y: 100 })

const mask = new Ellipse({ // [!code hl:7]
    width: 100,
    height: 100,
    innerRadius: 0.5,
    opacity: 0.5,
    fill: 'black',
    mask: true,
})

const image = new Image({
    width: 100,
    height: 100,
    url: '/image/leafer.jpg'
})

app.tree.add(group)

group.add([mask, image])   // [!code hl]