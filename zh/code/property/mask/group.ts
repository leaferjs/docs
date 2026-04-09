// #遮罩功能 [将圆形组设为遮罩 (Leafer)]
import { Leafer, Group, Ellipse, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 100, y: 100 })

const maskGroup = new Group({  // [!code hl:6]
    mask: true
})

maskGroup.add(new Ellipse({ width: 60, height: 60, fill: 'black' }))
maskGroup.add(new Ellipse({ x: 50, y: 50, width: 50, height: 50, fill: 'black' }))

const image = new Image({
    width: 100,
    height: 100,
    url: '/image/leafer.jpg'
})

leafer.add(group)

group.add([maskGroup, image])   // [!code hl:]