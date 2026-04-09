// #坐标转换 [内部坐标转世界坐标 (Leafer)]
import { Leafer, Frame, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 50, y: 50, scale: 5, fill: '#32cd79' })
const frame = new Frame({ x: 200, y: 100, width: 600, height: 800, children: [rect] })

leafer.add(frame)

// 内部坐标转世界坐标、frame坐标
const innerPoint = { x: 10, y: 10 } // [!code hl:6]
const worldPoint = rect.getWorldPoint(innerPoint)
const framePoint = rect.getWorldPoint(innerPoint, frame)

console.log(worldPoint) // {x: 300, y: 200} 
console.log(framePoint) // {x: 100, y: 100} 在 frame 中的坐标