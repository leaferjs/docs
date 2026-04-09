// #监听滑动事件
import { Leafer, Rect, SwipeEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 300, y: 100, width: 200, height: 300, fill: '#32cd79' })

leafer.add(rect)

rect.on(SwipeEvent.LEFT, function () { // [!code hl:9]
    rect.x -= 200
    rect.fill = 'blue'
})

rect.on(SwipeEvent.RIGHT, function () {
    rect.x += 200
    rect.fill = '#32cd79'
})