// #线性渐变填充 [设置不透明度 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:8]
        type: 'linear',
        opacity: 0.5,
        stops: [
            { offset: 0, color: { r: 255, g: 75, b: 75 } },
            { offset: 1, color: { r: 254, g: 176, b: 39 } }
        ]
    },
})

leafer.add(rect)