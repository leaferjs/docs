
// #创建 ImageBox [标准创建 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'
import { ImageBox } from '@leafer-in/box' // 导入box插件

const leafer = new Leafer({ view: window })


const box = new ImageBox({
    width: 100,
    height: 100,
    url: '/image/leafer.jpg',
    draggable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    draggable: true
})

leafer.add(box)
box.add(circle)