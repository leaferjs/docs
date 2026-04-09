// #创建自适应布局的 Leafer [full]
import { Leafer, Rect } from 'leafer-ui'

// 等同于 { view: window, top:0, right: 0, bottom: 0, left: 0 } 
const leafer = new Leafer({ view: window, fill: '#333' })

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 