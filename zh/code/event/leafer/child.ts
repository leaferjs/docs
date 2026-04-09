// #监听 Child 事件
import { Leafer, Group, Rect, ChildEvent, LeaferEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group()

leafer.add(group)

function onReady() {

    const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

    leafer.on(ChildEvent.ADD, function (e: ChildEvent) { // [!code hl:13]
        console.log('leafer', e.parent, e.child)
    })

    group.on(ChildEvent.ADD, function (e: ChildEvent) {
        console.log('parent', e.parent, e.child)
    })

    rect.on(ChildEvent.ADD, function (e: ChildEvent) {
        console.log('child', e.parent, e.child)
    })

    group.add(rect)
}

leafer.on(LeaferEvent.READY, onReady)

