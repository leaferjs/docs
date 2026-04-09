// #初始化元素样式
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ // [!code hl:10]
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    stroke: '#32cd79',
    strokeWidth: 2,
    dashPattern: [6, 6] // 绘制虚线
})

leafer.add(rect)