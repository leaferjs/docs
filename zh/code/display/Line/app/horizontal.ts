// #创建 Line [绘制横线 (App)]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const line = new Line({  // [!code hl:5]
    width: 100,
    strokeWidth: 5,
    stroke: '#32cd79',
    editable: true
})

app.tree.add(line)