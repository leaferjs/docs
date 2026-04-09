// #坐标转换 [世界坐标转内部坐标 (App)]
import { App, Group, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const group = new Group({ x: 50, y: 50, scale: 5, children: [new Rect({ fill: '#32cd79' })] })

app.tree.add(group)

// 世界坐标转内部坐标
const worldPoint = { x: 100, y: 100 } // [!code hl:4]
const innerPoint = group.getInnerPoint(worldPoint)

console.log(innerPoint) // {x: 10, y: 10}