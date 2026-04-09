// #图案描边 [默认 cover 覆盖模式 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    stroke: {  // [!code hl:5]
        type: 'image',
        url: '/image/leafer.jpg',
        // mode: 'cover' // 默认模式，相当于 CSS 的 background-size: cover
    }
})

leafer.add(rect)