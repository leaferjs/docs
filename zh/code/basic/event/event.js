// #监听事件 [通过 event 对象监听]
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({
    fill: '#32cd79',
    draggable: true,
    event: { // [!code hl:8]
        [PointerEvent.ENTER]: function (e) {
            e.current.fill = '#42dd89'
        },
        [PointerEvent.LEAVE]: function (e) {
            e.current.fill = '#32cd79'
        }
    }
}, 100, 100, 200, 200)

leafer.add(rect)