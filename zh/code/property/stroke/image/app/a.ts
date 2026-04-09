// #图案描边 [默认 cover 覆盖模式 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    stroke: {  // [!code hl:5]
        type: 'image',
        url: '/image/leafer.jpg',
        // mode: 'cover' // 默认模式，相当于 CSS 的 background-size: cover
    }
})

app.tree.add(rect)