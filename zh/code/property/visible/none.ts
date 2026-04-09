// #隐藏元素，且不占空间 (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    // 隐藏元素，且不占空间
    rect.visible = 0 // [!code hl]

}, 1000)