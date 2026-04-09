// #创建自适应布局的 Leafer [padding]
import { Leafer, Rect } from 'leafer-ui'

// 四周始终保持固定的间距
const leafer = new Leafer({
    view: window,
    top: 50,
    left: 100,
    right: 100,
    bottom: 30,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 