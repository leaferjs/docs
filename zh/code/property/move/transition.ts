// #通过 move() 移动元素 [有动画过渡 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' })

leafer.add(rect)

setTimeout(() => {

    // 沿 X/Y 轴同时移动 100 像素
    rect.move(100, 100, true) // [!code hl]

}, 1000)