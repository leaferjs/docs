// #线性渐变填充 [设置不透明度 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:8]
        type: 'linear',
        opacity: 0.5,
        stops: [
            { offset: 0, color: { r: 255, g: 75, b: 75 } },
            { offset: 1, color: { r: 254, g: 176, b: 39 } }
        ]
    },
})

app.tree.add(rect)