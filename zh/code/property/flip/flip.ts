// #通过 flip() 镜像元素 [无动画过渡 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' })

leafer.add(rect)

setTimeout(() => {

    // 按 X 轴镜像元素
    rect.flip('x') // [!code hl]

}, 1000)