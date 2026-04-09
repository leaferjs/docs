// #创建 Ellipse [绘制圆角弧线 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({  // [!code hl:11]
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    innerRadius: 1,
    stroke: "#32cd79",
    strokeWidth: 10,
    strokeAlign: 'center',
    strokeCap: 'round'
})

leafer.add(ellipse)