// #创建 Polygon [绘制自由多边形 (App)]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({  // [!code hl:5]
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90],  // [x,y, x,y ...]
    fill: '#32cd79',
    editable: true
})

app.tree.add(polygon)