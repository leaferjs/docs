// #监听拖放事件
import { Leafer, Group, Rect, DropEvent, DragEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 300, y: 300 })
const rect = new Rect({ fill: 'blue' })

leafer.add(new Rect({ fill: 'green', draggable: true }))
leafer.add(group)
group.add(rect)

group.on(DragEvent.ENTER, function () {  // [!code hl:16]
    DragEvent.setData({ data: 'drop data' })
    rect.set({ stroke: 'black', strokeWidth: 2 })
})

group.on(DragEvent.LEAVE, function () {
    rect.set({ stroke: '' })
})

group.on(DropEvent.DROP, function (e) {
    console.log(e.data)
    e.list.forEach((leaf) => {

        leaf.dropTo(group) // 放置元素到group中

    })
})