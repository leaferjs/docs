// #内阴影 (App)
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: '#32cd79',
    innerShadow: { // [!code hl:6]
        x: 10,
        y: 5,
        blur: 20,
        color: '#FF0000AA'
    }
})

app.tree.add(rect)