// #光标样式 [设置光标 (Leafer)]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({
    width: 100,
    height: 100,
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90, 90, 90, 10, 90],
    curve: true,
    fill: '#32cd79',
    cursor: 'no-drop' // [!code hl]
})

leafer.add(polygon)