// #应用与引擎配置 - document 视口类型 [实现原理]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    // 以下配置 = tree: { type: 'document' } , // [!code hl:4]
    tree: { type: 'viewport' }, // 添加基础视口
    zoom: { min: 1 }, // 视图缩放范围
    move: { scroll: 'limit' } // 限制在有内容的区域内滚动
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))
app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 600, 200, 200))
app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 1200, 200, 200))
app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 1800, 200, 200))