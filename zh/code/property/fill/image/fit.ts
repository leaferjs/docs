// #图案填充 [fit 适应模式 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:5]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'fit' // 相当于 CSS 的 background-size: contain
    }
})

leafer.add(rect)