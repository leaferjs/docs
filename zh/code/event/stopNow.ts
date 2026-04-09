// #立即阻止事件流传递
import { Leafer, Group, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const parent = new Group()
const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(parent)
parent.add(rect)

// 捕获 ---
parent.on(PointerEvent.ENTER, function (e: PointerEvent) { // [!code hl:10]
    console.log('[capture] Parent enter A')
    e.stopNow() // 阻止事件向父节点及同级传递 // [!code hl]
}, true)

parent.on(PointerEvent.ENTER, function () {
    console.log('[capture] Parent enter B')
}, true)

// [capture] Parent enter A

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
