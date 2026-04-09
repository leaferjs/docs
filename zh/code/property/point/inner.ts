// #坐标转换 [世界坐标转内部坐标 (Leafer)]
import { Leafer, Group, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 50, y: 50, scale: 5, children: [new Rect({ fill: '#32cd79' })] })

leafer.add(group)

// 世界坐标转内部坐标
const worldPoint = { x: 100, y: 100 } // [!code hl:4]
const innerPoint = group.getInnerPoint(worldPoint)

console.log(innerPoint) // {x: 10, y: 10}