// #创建 Ellipse [绘制带圆角的扇形圆环 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'
import '@leafer-in/corner' // 导入圆角插件  // [!code hl]

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({  // [!code hl:9]
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    innerRadius: 0.5,
    cornerRadius: 10,
    fill: "#32cd79"
})

leafer.add(ellipse)