// #擦除功能 [将圆形组设为橡皮擦 (Leafer)]
import { Leafer, Group, Ellipse, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 100, y: 100 })

const eraserGroup = new Group({  // [!code hl:6]
    x: 20,
    y: 20,
    eraser: true
})

eraserGroup.add(new Ellipse({ width: 40, height: 40, fill: 'black' }))
eraserGroup.add(new Ellipse({ x: 30, y: 30, width: 30, height: 30, fill: 'black' }))

const image = new Image({
    width: 100,
    height: 100,
    cornerRadius: 30,
    url: '/image/leafer.jpg'
})

leafer.add(group)

group.add([image, eraserGroup])  // [!code hl]