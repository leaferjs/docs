// #创建 Line [绘制横线 (Leafer)]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:4]
    width: 100,
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(line)