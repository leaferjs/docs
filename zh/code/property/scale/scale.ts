// #通过 scaleOf() 缩放元素 [无动画过渡 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    // 围绕中心点继续缩放1.5倍
    rect.scaleOf('center', 1.5) // [!code hl]

}, 1000)