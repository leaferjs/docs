// #监听点击事件 [多种点击事件同时只触发一个]
import { Leafer, Rect, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({
    view: window
})

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

rect.on(PointerEvent.TAP, () => { // [!code hl:15]
    console.log('tap')
})

rect.on(PointerEvent.DOUBLE_TAP, () => {
    console.log('double_tap')
})

rect.on(PointerEvent.LONG_TAP, () => {
    console.log('long_tap')
})

rect.on(PointerEvent.LONG_PRESS, () => {
    console.log('long_press')
})