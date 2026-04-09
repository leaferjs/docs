// #图案填充 [clip 裁剪模式 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:7]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'clip',
        offset: { x: -40, y: -90 },
        scale: { x: 1.1, y: 1.1 },
        rotation: 20
    }
})

leafer.add(rect)