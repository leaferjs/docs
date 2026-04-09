// #创建 Frame [标准创建 (Leafer)]
import { Leafer, Frame, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: '#333' })

const frame = new Frame({ // [!code hl:4]
    width: 100,
    height: 100
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#32cd79',
    draggable: true
})

leafer.add(frame)
frame.add(circle)