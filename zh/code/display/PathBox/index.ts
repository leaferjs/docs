
// #创建 PathBox [标准创建 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'
import { PathBox } from '@leafer-in/box' // 导入box插件

const leafer = new Leafer({ view: window })


const box = new PathBox({
    path: 'X 0 0 100 100 30 P 50 50 25', // [!code hl:2]
    windingRule: 'evenodd',
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