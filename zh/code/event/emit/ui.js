// #模拟派发交互事件
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: 'green', draggable: true })

leafer.add(rect)

function onEnter(e) {
    e.current.fill = 'blue'
}

rect.on(PointerEvent.ENTER, onEnter)

rect.emit('pointer.enter', { current: rect }) // [!code hl]
