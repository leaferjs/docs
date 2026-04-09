// #模拟点击事件
import { Leafer, Rect, PointerButton, PointerEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79' })

leafer.add(rect)

rect.on(PointerEvent.DOWN, (e) => {
    console.log('down', e)
    if (e.left) rect.fill = 'blue'
})

rect.on(PointerEvent.TAP, (e) => {
    console.log('tap', e)
    if (e.left) rect.fill = '#32cd79'
})

const { interaction } = leafer

setTimeout(() => {  // [!code hl:15]

    interaction.pointerDown({ x: 100, y: 100, buttons: PointerButton.MIDDLE })
    interaction.pointerUp()

    interaction.pointerDown({ x: 100, y: 100, buttons: PointerButton.RIGHT })
    interaction.pointerUp()

    interaction.pointerDown({ x: 100, y: 100 })

    setTimeout(() => {
        interaction.pointerUp({ x: 100, y: 100 })
    }, 500)

}, 1000)