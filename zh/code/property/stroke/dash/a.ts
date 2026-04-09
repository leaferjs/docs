// #虚线描边 (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    stroke: '#32cd79',
    strokeWidth: 2,
    dashPattern: [6, 6] // [!code hl]
})

leafer.add(rect)