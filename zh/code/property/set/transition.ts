// #通过 set() 修改属性 [有动画过渡 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' })

leafer.add(rect)

setTimeout(() => {

    // 设置元素的位置
    rect.set({ x: 100, y: 100 }, true) // [!code hl]

}, 1000)