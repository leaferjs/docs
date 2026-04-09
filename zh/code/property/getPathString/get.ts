// #获取元素的字符串路径 (Leafer)
import { Leafer, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    innerRadius: 0.5,
    fill: "#32cd79"
})

leafer.add(ellipse)

// 打印 svg 路径字符串
console.log(ellipse.getPathString(true)) // [!code hl]