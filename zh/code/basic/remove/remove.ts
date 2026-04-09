// #移除元素 [标准移除]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    rect.remove() // [!code hl] // 等同于 leafer.remove(rect)

}, 2000)
