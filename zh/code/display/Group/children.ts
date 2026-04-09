// #创建 Group [通过 children 属性添加 (Leafer)]
import { Leafer, Group, Rect, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 200,
    height: 200,
    fill: '#32cd79',
    draggable: true
})

const ellipse = new Ellipse({
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: "white"
})

const group = new Group({ // [!code hl:5]
    x: 100,
    y: 100,
    children: [rect, ellipse]
})

leafer.add(group)