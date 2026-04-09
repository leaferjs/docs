// #监听 Bounds 事件 [resize]
import { Leafer, Rect, BoundsEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

rect.on(BoundsEvent.RESIZE, function (target: Rect) { // 监听 bounds.resize 事件 // [!code hl:5]

    target.fill = 'blue' // target 为当前监听的 rect 元素

})

setTimeout(() => {

    rect.width = 200

}, 1000)