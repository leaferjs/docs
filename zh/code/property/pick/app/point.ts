// #通过 point 拾取元素 (App)
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect1 = new Rect({ id: 'block', fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79' })

app.tree.add(rect1)
app.tree.add(rect2)

console.log(
    app.pick({ x: 10, y: 10 }) // [!code hl] // {taget: rect2, path: [rect2, tree, app]}
)