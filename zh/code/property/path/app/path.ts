// #Rect 转路径优先模式 [使用 path 属性 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    windingRule: 'evenodd',  // [!code hl:2] 
    path: 'X0 0 100 100 30M75 50P50 50 25',
    fill: '#32cd79'
})

app.tree.add(rect)
