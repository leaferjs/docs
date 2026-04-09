// #调整元素在父元素中的层叠顺序 (Leafer)
import { Leafer, Group, Rect, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true
})

const ellipse = new Ellipse({
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: "#FEB027"
})

leafer.add(new Group({ children: [rect, ellipse] }))

setTimeout(() => {

    // 调整矩形的显示顺序
    rect.zIndex = 1 // [!code hl]

}, 1000)