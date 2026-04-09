// #移除监听多个事件 [字符串形式]
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onEnter(e) {
    e.current.fill = '#42dd89'
}

function onLeave(e) {
    e.current.fill = '#42dd89'
}

rect.on([PointerEvent.ENTER, PointerEvent.UP], onEnter)
rect.on(PointerEvent.LEAVE, onLeave)

rect.off('pointer.enter pointer.up', onEnter)  // [!code hl]
