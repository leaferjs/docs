// #通过 flip() 镜像元素 [有动画过渡 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' })

leafer.add(rect)

setTimeout(() => {

    // 按 X 轴镜像元素
    rect.flip('x', true) // [!code hl]

}, 1000)