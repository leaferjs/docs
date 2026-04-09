// #获取元素的字符串路径 (App)
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const ellipse = new Ellipse({
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    innerRadius: 0.5,
    fill: "#32cd79"
})

app.tree.add(ellipse)

// 打印 svg 路径字符串
console.log(ellipse.getPathString(true)) // [!code hl]