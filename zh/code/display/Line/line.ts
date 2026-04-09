// #创建 Line [绘制斜线 (Leafer)]
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const line = new Line({  // [!code hl:5]
    width: 100,
    rotation: 45,
    strokeWidth: 5,
    stroke: '#32cd79',
    dashPattern: [10, 10] // 虚线描边属性
})

leafer.add(line)