// #创建 Rect [绘制圆角矩形 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ // [!code hl:6]
    width: 100,
    height: 100,
    fill: '#32cd79',
    cornerRadius: 20
})

leafer.add(rect)