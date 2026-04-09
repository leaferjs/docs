// #光标样式 [设置图片光标 (Leafer)]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({
    width: 100,
    height: 100,
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90, 100, 90, 0, 90],
    curve: true,
    fill: '#32cd79',
    cursor: { url: 'https://leaferjs.com/image/cursor.svg', x: 2, y: 2 } // [!code hl]
})

leafer.add(polygon)