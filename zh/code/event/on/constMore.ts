// #监听多个事件 [数组形式]
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onEnter(e: PointerEvent) {
    (e.current as Rect).fill = '#42dd89'
}

function onLeave(e: PointerEvent) {
    (e.current as Rect).fill = '#32cd79'
}

rect.on([PointerEvent.ENTER, PointerEvent.LEAVE], // [!code hl:9]
    function (e: PointerEvent) {
        if (e.type === PointerEvent.ENTER) {
            onEnter(e)
        } else {
            onLeave(e)
        }
    }
)
