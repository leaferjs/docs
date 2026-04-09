// #克隆元素 (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' })

leafer.add(rect)

setTimeout(() => {

    // 克隆元素，并设置位置
    const rect2 = rect.clone({ x: 200, y: 200 }) // [!code hl:2]
    leafer.add(rect2)

}, 1000)