// #图案填充 [repeat 平铺模式旋转 90 度 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:7]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'repeat',
        scale: 0.2,
        rotation: 90
    }
})

app.tree.add(rect)