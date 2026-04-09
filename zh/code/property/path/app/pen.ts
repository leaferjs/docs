// #Rect 转路径优先模式 [使用 pen 绘制 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: '#32cd79'
})

app.tree.add(rect)

rect.windingRule = 'evenodd' // [!code hl:2] 
rect.pen.roundRect(0, 0, 100, 100, 30).drawArc(50, 50, 25)
