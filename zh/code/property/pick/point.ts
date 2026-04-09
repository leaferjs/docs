// #通过 point 拾取元素 (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ id: 'block', fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79' })

leafer.add(rect1)
leafer.add(rect2)

console.log(
    leafer.pick({ x: 10, y: 10 }) // [!code hl] // {taget: rect2, path: [rect2, leafer]}
)