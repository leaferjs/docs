// #应用与引擎配置 - 鼠标滚动直接缩放视图 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    tree: { type: 'viewport' },
    wheel: { zoomMode: true } // [!code hl]
})

app.tree.add(new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true }))