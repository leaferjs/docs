// #监听 Resize 事件
import { Leafer, Rect, ResizeEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(ResizeEvent.RESIZE, function (e: ResizeEvent) { // [!code hl:4]
    // resize
    console.log(e.width, e.height, e.old)
})  
