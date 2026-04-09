// #通过 move() 移动元素 [无动画过渡 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' })

leafer.add(rect)

setTimeout(() => {

    // 沿 X/Y 轴同时移动 100 像素
    rect.move(100, 100) // [!code hl]

}, 1000)