// #around 属性 [围绕坐标 (50,50) 为中心进行绘制 (Leafer)]
import { Leafer, Rect, Frame } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ // [!code hl:9]
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    around: 'center',
    fill: '#4DCB71',
    draggable: true
})

leafer.add(new Frame({ width: 100, height: 100, fill: '#FF4A2C', children: [rect] }))