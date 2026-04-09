// #创建 Line [绘制趋势图 (Leafer)]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:6]
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90],  // [x,y, x,y ...]
    curve: true,
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(line)