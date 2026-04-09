// #应用与引擎配置 - 禁用多点触屏功能 [App]
import { App, Rect } from 'leafer-ui'

const app = new App({
    view: window,
    tree: { multiTouch: { disabled: true } }  // [!code hl]
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100))