// #图案填充 [repeat 平铺模式 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'repeat', // 相当于 CSS 的 background-repeat: repeat
        scale: 0.2
    }
})

leafer.add(rect)