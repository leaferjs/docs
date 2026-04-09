// #监听观察事件
import { Leafer, Rect, WatchEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(WatchEvent.DATA, function (e) { // [!code hl:3]
    console.log(e.data) // changed list
})  
