// #创建 Path [使用 pen 绘制 (App)]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const path = new Path({
    fill: '#32cd79'
})

app.tree.add(path)

path.windingRule = 'evenodd' // [!code hl:2] 
path.pen.roundRect(0, 0, 100, 100, 30).drawArc(50, 50, 25)
