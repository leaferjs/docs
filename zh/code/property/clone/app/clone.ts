// #克隆元素 (App)
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' })

app.tree.add(rect)

setTimeout(() => {

    // 克隆元素，并设置位置
    const rect2 = rect.clone({ x: 200, y: 200 }) // [!code hl:2]
    app.tree.add(rect2)

}, 1000)