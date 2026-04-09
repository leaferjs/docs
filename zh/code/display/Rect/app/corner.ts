// #创建 Rect [绘制圆角矩形 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({ // [!code hl:7]
    width: 100,
    height: 100,
    fill: '#32cd79',
    cornerRadius: 20,
    editable: true
})

app.tree.add(rect)