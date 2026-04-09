// #监听多个事件 [字符串形式]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onEnter(e) {
    e.current.fill = '#42dd89'
}

function onLeave(e) {
    e.current.fill = '#32cd79'
}

rect.on('pointer.enter pointer.leave', // [!code hl:9]
    function (e) {
        if (e.type === 'pointer.enter') {
            onEnter(e)
        } else {
            onLeave(e)
        }
    }
)
