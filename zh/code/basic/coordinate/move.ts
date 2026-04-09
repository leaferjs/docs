// #快速坐标转换 [世界坐标中的移动距离 转 本地坐标移动距离]
import { Group, Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })
const group = new Group({ x: 100, y: 100, scaleX: 2, scaleY: 2, children: [rect] })

leafer.add(group)

// 世界坐标中的移动距离 转 本地坐标移动距离
const worldMove = { x: 10, y: 10 }  // [!code hl:5]
const localMove = { x: 0, y: 0 }
rect.worldToLocal(worldMove, localMove, true)

console.log(localMove) // {x: 5, y: 5}
