// #事件流
import { Leafer, Group, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group()
const parent = new Group()
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(group)
group.add(parent)
parent.add(rect)
// [!code hl:32]
// 捕获 ---
group.on(PointerEvent.ENTER, function () {
    console.log('[capture] Group enter')
}, { capture: true })

parent.on(PointerEvent.ENTER, function () {
    console.log('[capture] Parent enter')
}, true)

rect.on(PointerEvent.ENTER, function () {
    console.log('[capture] Rect enter')
}, true)


// 冒泡 ---
rect.on(PointerEvent.ENTER, function () {
    console.log('[bubble] Rect enter')
})

parent.on(PointerEvent.ENTER, function () {
    console.log('[bubble] Parent enter')
})

group.on(PointerEvent.ENTER, function () {
    console.log('[bubble] Group enter')
})
