// #应用与引擎配置 - 拖拽时直接平移视图 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({ view: window, tree: { type: 'viewport' } })

app.tree.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
app.tree.add(Rect.one({ fill: '#32cd79', draggable: true }, 300, 100))

app.config.move.drag = true  // [!code hl] // 预览模式，可在应用运行中实时修改。