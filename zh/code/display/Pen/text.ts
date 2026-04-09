// #创建 Pen [结合文字 (Leafer)]
import { Leafer, Pen, Text } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const pen = new Pen() // [!code hl:11]

pen.setStyle({ stroke: '#4DCB71', strokeWidth: 4, strokeAlign: 'inside' })
pen.roundRect(0, 20, 100, 60, 30)

pen.add(new Text({ x: 60, y: 42, fill: '#4DCB71', fontSize: 16, text: 'ON' }))

pen.setStyle({ fill: '#4DCB71' })
pen.arc(30, 50, 23)

leafer.add(pen)