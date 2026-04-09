// #应用与引擎配置 - document 视口类型 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    tree: { type: 'document' } // 给 tree 层添加视口  // [!code hl]
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 600, 200, 200))
app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 1200, 200, 200))
app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 1800, 200, 200))