// #单独指定缩放层 [App]
import { App, Group, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({ view: window, tree: { type: 'viewport' } })

const group = new Group() // [!code hl:4]
app.tree.add(group)

app.tree.zoomLayer = group

// fixed layer
app.tree.add(new Rect({ fill: '#FF4B4B', draggable: true }))

// zoom / move layer
group.add(new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true }))