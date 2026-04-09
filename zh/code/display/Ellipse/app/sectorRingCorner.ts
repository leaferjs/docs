// #创建 Ellipse [绘制带圆角的扇形圆环 (App)]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/corner' // 导入圆角插件 // [!code hl]

const app = new App({ view: window, editor: {} })

const ellipse = new Ellipse({  // [!code hl:10]
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    innerRadius: 0.5,
    cornerRadius: 10,
    fill: "#32cd79",
    editable: true
})

app.tree.add(ellipse)