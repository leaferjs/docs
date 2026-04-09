// #创建 Line [绘制圆角折线 (App)]
import { App, Line } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const line = new Line({  // [!code hl:6]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90], // [x,y, x,y ...]
    cornerRadius: 5,
    strokeWidth: 5,
    stroke: '#32cd79',
    editable: true
})

app.tree.add(line)