// #应用与引擎配置 - 阻止移动端默认滑动页面事件 [App]
import { App, Rect } from 'leafer-ui'

const app = new App({
    view: window,
    tree: { touch: { preventDefault: true } }  // [!code hl]
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100))