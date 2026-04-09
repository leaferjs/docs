// #创建自适应布局的 Leafer [padding-left]
import { Leafer, Rect } from 'leafer-ui'

// 等同于 { view: window, top:0, right: 0, bottom: 0, left: 100 }
const leafer = new Leafer({ view: window, left: 100, fill: '#333' })

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 