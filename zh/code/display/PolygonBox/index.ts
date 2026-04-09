
// #创建 PolygonBox [标准创建 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'
import { PolygonBox } from '@leafer-in/box' // 导入box插件

const leafer = new Leafer({ view: window })


const box = new PolygonBox({
    width: 100,
    height: 100,
    sides: 5,
    fill: '#FF4B4B',
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