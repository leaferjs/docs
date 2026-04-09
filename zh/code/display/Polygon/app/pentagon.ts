// #创建 Polygon [绘制五边形 (App)]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({  // [!code hl:7]
    width: 100,
    height: 100,
    sides: 5,
    fill: '#32cd79',
    editable: true
})

app.tree.add(polygon)