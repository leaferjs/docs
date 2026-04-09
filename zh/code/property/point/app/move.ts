// #坐标转换 [世界坐标中的移动距离 转 内部坐标移动距离 (App)]
import { App, Group, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const group = new Group({ x: 50, y: 50, scale: 5, children: [new Rect({ fill: '#32cd79' })] })

app.tree.add(group)

// 世界坐标中的移动距离 转 内部坐标移动距离
const worldMovePoint = { x: 100, y: 100 } // [!code hl:4]
const innerMovePoint = group.getInnerPoint(worldMovePoint, null, true)

console.log(innerMovePoint) // {x: 20, y: 20}