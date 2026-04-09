// #查找功能 [通过 自定义函数 查找 (Leafer)]
import { Leafer, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ fill: '#32cd79', stroke: 'black' })
const rect2 = new Rect({ fill: '#32cd79', x: 150 })
const ellipse = new Ellipse({ fill: '#32cd79', stroke: 'black', x: 300 })

leafer.add(rect1)
leafer.add(rect2)
leafer.add(ellipse)

console.log(
    leafer.find(function (item) {  // [!code hl:3] 
        return item.stroke === 'black' ? 1 : 0 // [rect1, ellipse]
    })
)