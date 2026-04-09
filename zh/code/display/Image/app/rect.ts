// #使用 Rect 代替 Image (App)
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    fill: {  // [!code hl:5]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch'
    },
    editable: true
})

app.tree.add(rect)