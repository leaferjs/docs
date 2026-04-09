// #监听拖拽事件
import { Leafer, Rect, DragEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 200, y: 100, fill: '#32cd79' })

leafer.rotation = 30
leafer.add(rect)

rect.on(DragEvent.DRAG, function (e) {  // [!code hl:3]
    e.current.moveWorld(e.moveX, e.moveY)
}) 
