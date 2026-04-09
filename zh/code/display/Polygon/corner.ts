// #创建 Polygon [绘制圆角六边形 (Leafer)]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({  // [!code hl:7]
    width: 100,
    height: 100,
    sides: 6,
    cornerRadius: 10,
    fill: '#32cd79'
})

leafer.add(polygon)