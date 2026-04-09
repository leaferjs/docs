// #通过 move() 移动元素 [无动画过渡 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' })

app.tree.add(rect)

setTimeout(() => {

    // 沿 X/Y 轴同时移动 100 像素
    rect.move(100, 100) // [!code hl]

}, 1000)