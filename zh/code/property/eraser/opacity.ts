// #擦除功能 [将半透明的圆环设为橡皮擦 (Leafer)]
import { Leafer, Group, Ellipse, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 100, y: 100, draggable: true })

const image = new Image({
    width: 100,
    height: 100,
    cornerRadius: 30,
    url: '/image/leafer.jpg'
})

const eraser = new Ellipse({ // [!code hl:10]
    x: 15,
    y: 15,
    width: 70,
    height: 70,
    innerRadius: 0.5,
    opacity: 0.5,
    fill: 'black',
    eraser: true
})

leafer.add(group)

group.add([image, eraser])  // [!code hl]