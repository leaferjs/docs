// #监听 Leafer 事件
import { Leafer, Rect, LeaferEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(LeaferEvent.READY, function () { // [!code hl:3]
    // ready
})  
