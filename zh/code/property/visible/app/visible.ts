// #隐藏元素 (App)
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

app.tree.add(rect)

setTimeout(() => {

    // 隐藏元素
    rect.visible = false // [!code hl]

}, 1000)