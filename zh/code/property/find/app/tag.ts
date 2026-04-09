// #查找功能 [通过 tag 查找 (App)]
import { App, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect1 = new Rect({ fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79', x: 150 })
const ellipse = new Ellipse({ fill: '#32cd79', x: 300 })

app.tree.add(rect1)
app.tree.add(rect2)
app.tree.add(ellipse)

console.log(
    app.find('Rect')  // [!code hl] // [rect1, rect2]
)