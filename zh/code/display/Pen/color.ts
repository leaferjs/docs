// #创建 Pen [画出不同颜色的形状 (Leafer)]
import { Leafer, Pen } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const pen = new Pen() // [!code hl:9]

pen.setStyle({ fill: '#FF4B4B', windingRule: 'evenodd' })
pen.roundRect(0, 0, 100, 100, 30).arc(50, 50, 25)

pen.setStyle({ x: 50, y: 50, fill: '#FEB027' })
pen.arc(0, 0, 20)

leafer.add(pen)