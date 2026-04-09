// #创建 Ellipse [绘制椭圆 (App)]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const ellipse = new Ellipse({  // [!code hl:6]
    width: 50,
    height: 100,
    fill: "#32cd79",
    editable: true
})

app.tree.add(ellipse)