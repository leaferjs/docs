// #外阴影 [box-shadow (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: 'rgba(50,205,121,0.7)',
    shadow: { // [!code hl:7]
        x: 10,
        y: -10,
        blur: 20,
        color: '#FF0000AA',
        box: true // box-shadow
    }
})

leafer.add(rect)