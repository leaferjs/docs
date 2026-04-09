// #停用元素交互事件 (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79', draggable: true })

leafer.add(rect)

setTimeout(() => {

    // 停用元素交互事件，将无法拖拽元素
    rect.hittable = false // [!code hl]

}, 1000)