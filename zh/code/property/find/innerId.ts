// #查找功能 [通过 innerId 查找 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect1 = new Rect({ id: 'block', fill: '#32cd79' })
const rect2 = new Rect({ fill: '#32cd79' })

leafer.add(rect1)
leafer.add(rect2)
console.log(
    leafer.find(rect2.innerId)  // [!code hl] // [rect2]
)