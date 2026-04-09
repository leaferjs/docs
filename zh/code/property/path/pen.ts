// #Rect 转路径优先模式 [使用 pen 绘制 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: '#32cd79'
})

leafer.add(rect)

rect.windingRule = 'evenodd' // [!code hl:2] 
rect.pen.roundRect(0, 0, 100, 100, 30).drawArc(50, 50, 25)
