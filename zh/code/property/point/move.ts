// #坐标转换 [世界坐标中的移动距离 转 内部坐标移动距离 (Leafer)]
import { Leafer, Group, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 50, y: 50, scale: 5, children: [new Rect({ fill: '#32cd79' })] })

leafer.add(group)

// 世界坐标中的移动距离 转 内部坐标移动距离
const worldMovePoint = { x: 100, y: 100 } // [!code hl:4]
const innerMovePoint = group.getInnerPoint(worldMovePoint, null, true)

console.log(innerMovePoint) // {x: 20, y: 20}