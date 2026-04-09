// #等待元素被添加到父元素中时，执行回调 (Leafer)
import { Leafer, Group, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ fill: '#32cd79' })

const group = new Group()

rect.waitParent(() => { // [!code hl:3]
    rect.draggable = true
})

group.add(rect)
leafer.add(group)