// #查找功能 [通过 className 查找 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ className: 'menu', fill: '#32cd79' })
const rect2 = new Rect({ className: 'menu', fill: '#32cd79', x: 150 })
const rect3 = new Rect({ fill: '#32cd79', x: 300 })

leafer.add(rect1)
leafer.add(rect2)
leafer.add(rect3)

console.log(
    leafer.find('.menu') // [!code hl] // [rect1, rect2]
) 