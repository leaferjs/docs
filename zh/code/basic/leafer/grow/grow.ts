// #创建自动生长的 Leafer [grow]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    grow: true, // 自动生长 // [!code hl:2] 
    fill: '#333'
})

// 拖拽矩形可以看到画布在生长，自动贴合内容
leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 