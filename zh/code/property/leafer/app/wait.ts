// #等待元素被添加到引擎中时，执行回调 (App)
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({ fill: '#32cd79' })

rect.waitLeafer(() => { // [!code hl:3]
    rect.draggable = true
})

app.tree.add(rect)