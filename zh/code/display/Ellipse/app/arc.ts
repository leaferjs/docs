// #创建 Ellipse [绘制圆角弧线 (App)]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const ellipse = new Ellipse({  // [!code hl:12]
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    innerRadius: 1,
    stroke: "#32cd79",
    strokeWidth: 10,
    strokeAlign: 'center',
    strokeCap: 'round',
    editable: true
})

app.tree.add(ellipse)