// #应用与引擎配置 - 控制视图缩放范围 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    tree: { type: 'viewport' },
    zoom: { min: 0.02, max: 256 } // [!code hl]
})

app.tree.add(new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true }))