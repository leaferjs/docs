// #混合模式 [source-in 仅在新形状和目标画布重叠的地方绘制新形状，其他的都是透明的 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect1 = Rect.one({ fill: '#FF4B4B', cornerRadius: 20 }, 100, 100)
const rect2 = Rect.one({ fill: '#32cd79', cornerRadius: 50 }, 150, 150)

app.tree.add([rect1, rect2])

setTimeout(() => {

    // 设置混合模式
    rect2.blendMode = 'source-in'  // [!code hl]

}, 1000)