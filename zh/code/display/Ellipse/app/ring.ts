// #创建 Ellipse [绘制圆环 (App)]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const ellipse = new Ellipse({  // [!code hl:7]
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: "#32cd79",
    editable: true
})

app.tree.add(ellipse)