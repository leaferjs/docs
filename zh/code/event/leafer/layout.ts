// #监听布局事件
import { LayoutEvent, Leafer, Rect, } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(LayoutEvent.AFTER, function () { // [!code hl:6]
    // layout after
    if (leafer.watcher.changed) {
        leafer.emit(LayoutEvent.AGAIN)
    }
})  
