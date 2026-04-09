// #限制元素拖动范围 [在 Frame 内拖动 (Leafer)]
import { Leafer, Frame, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: '#333' })

const frame = new Frame({
    width: 200,
    height: 200
})

const rect = new Ellipse({
    width: 50,
    height: 50,
    fill: '#32cd79',
    dragBounds: 'parent', // 限制元素拖动范围 // [!code hl]
    draggable: true
})

leafer.add(frame)
frame.add(rect)