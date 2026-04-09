// #模拟 drag 事件
import { Leafer, Rect, DragEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79', draggable: true })

leafer.add(rect)

rect.on(DragEvent.DRAG, (e) => {
    console.log('drag', e)
})

const { interaction } = leafer

setTimeout(() => {  // [!code hl:7]

    interaction.pointerDown({ x: 100, y: 100 })
    interaction.pointerMove({ x: 500, y: 500 }) // drag
    interaction.pointerUp()

}, 1000)