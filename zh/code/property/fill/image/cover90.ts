// #图案填充 [cover 覆盖模式旋转 90 度 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:5]
        type: 'image',
        url: '/image/leafer.jpg',
        rotation: 90
    }
})

leafer.add(rect)