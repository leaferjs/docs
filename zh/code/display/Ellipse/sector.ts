// #创建 Ellipse [绘制扇形 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({  // [!code hl:7]
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    fill: "#32cd79"
})

leafer.add(ellipse)