// #Rect 转路径优先模式 [使用 path 属性 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    windingRule: 'evenodd',  // [!code hl:2] 
    path: 'X0 0 100 100 30M75 50P50 50 25',
    fill: '#32cd79'
})

leafer.add(rect)
