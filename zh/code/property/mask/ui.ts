// #遮罩功能 [将圆环设为遮罩 (Leafer)]
import { Leafer, Group, Ellipse, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 100, y: 100 })

const mask = new Ellipse({ // [!code hl:7]
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: 'black',
    mask: true
})

const image = new Image({
    width: 100,
    height: 100,
    url: '/image/leafer.jpg'
})

leafer.add(group)

group.add([mask, image])   // [!code hl]