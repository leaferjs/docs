// #创建 Ellipse [绘制圆 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({  // [!code hl:6]
    width: 100,
    height: 100,
    fill: "#32cd79"
})

leafer.add(ellipse)