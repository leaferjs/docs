// #原点 [围绕原点倾斜 45 度 (Leafer)]
import { Leafer, Rect, Frame } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 25,
    y: 25,
    width: 50,
    height: 50,
    origin: 'center', // [!code hl:2]
    skewX: 45,
    draggable: true,
    fill: '#4DCB71'
})

leafer.add(new Frame({ width: 100, height: 100, fill: '#FF4A2C', children: [rect] }))