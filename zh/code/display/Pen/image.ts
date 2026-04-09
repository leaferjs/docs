// #创建 Pen [结合图片 (Leafer)]
import { Leafer, Pen } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const pen = new Pen() // [!code hl:9]

pen.setStyle({ fill: { type: 'radial', stops: [{ offset: 0, color: '#4DCB71' }, { offset: 1, color: '#79CB4D' }] }, windingRule: 'evenodd' })
pen.roundRect(0, 0, 100, 100, 30).arc(50, 50, 25)

pen.setStyle({ fill: { type: 'image', url: '/image/leafer.jpg' } })
pen.arc(50, 50, 20)

leafer.add(pen)