// #偏移元素 (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    // 沿 X/Y 偏移 100 像素
    rect.set({ offsetX: 100, offsetY: 100 }) // [!code hl]

}, 1000)