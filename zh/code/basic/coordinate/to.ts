// #快速坐标转换 [世界坐标转本地坐标]
import { Group, Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })
const group = new Group({ x: 100, y: 100, scaleX: 2, scaleY: 2, children: [rect] })

leafer.add(group)

// 世界坐标转本地坐标
const point = { x: 100, y: 100 } // [!code hl:4]
rect.worldToLocal(point)

console.log(point) // {x: 0, y: 0}