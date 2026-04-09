// #外阴影 [box-shadow (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: 'rgba(50,205,121,0.7)',
    shadow: { // [!code hl:7]
        x: 10,
        y: -10,
        blur: 20,
        color: '#FF0000AA',
        box: true // box-shadow
    }
})

app.tree.add(rect)