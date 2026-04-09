// #坐标转换 [内部坐标转世界坐标 (App)]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({ x: 50, y: 50, scale: 5, fill: '#32cd79' })
const frame = new Frame({ x: 200, y: 100, width: 600, height: 800, children: [rect] })

app.tree.add(frame)

// 内部坐标转世界坐标、frame坐标
const innerPoint = { x: 10, y: 10 } // [!code hl:6]
const worldPoint = rect.getWorldPoint(innerPoint)
const framePoint = rect.getWorldPoint(innerPoint, frame)

console.log(worldPoint) // {x: 300, y: 200} 
console.log(framePoint) // {x: 100, y: 100} 在 frame 中的坐标