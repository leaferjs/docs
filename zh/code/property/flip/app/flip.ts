// #通过 flip() 镜像元素 [无动画过渡 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' })

app.tree.add(rect)

setTimeout(() => {

    // 按 X 轴镜像元素
    rect.flip('x') // [!code hl]

}, 1000)