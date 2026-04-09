// #监听元素属性事件
import { Leafer, Rect, LeaferEvent, PropertyEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

function onReady() {

    leafer.on(PropertyEvent.CHANGE, function (e: PropertyEvent) { // [!code hl:9]
        console.log('leafer', e.target, e.attrName, e.newValue, e.oldValue)
    })

    rect.on(PropertyEvent.CHANGE, function (e: PropertyEvent) {
        console.log('leaf', e.target, e.attrName, e.newValue, e.oldValue)
    })

    rect.fill = 'blue'
}

leafer.on(LeaferEvent.READY, onReady)
