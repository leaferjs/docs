// #应用与引擎配置 - 拖拽至边界时自动平移视图 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    tree: {},
    move: { dragOut: true } // [!code hl]
})

app.tree.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
app.tree.add(Rect.one({ fill: '#32cd79', draggable: true }, 300, 100))