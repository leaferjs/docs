// #应用与引擎配置 - 关闭交互事件 [App]
import { App, Rect } from 'leafer-ui'

const app = new App({
    view: window,
    tree: {},
    hittable: false // [!code hl]
})

app.tree.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))