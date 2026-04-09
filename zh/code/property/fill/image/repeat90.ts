// #图案填充 [repeat 平铺模式旋转 90 度 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:7]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'repeat',
        scale: 0.2,
        rotation: 90
    }
})

leafer.add(rect)