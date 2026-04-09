// #视图控制 [聚焦到指定元素 - 不缩放画布，只进行位移]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件（可选）
import '@leafer-in/view' // 导入视图控制插件  // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100)
app.tree.add(rect)
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))

setTimeout(() => {

    app.tree.zoom(rect, 0, true) // [!code hl:1]

}, 1000)
