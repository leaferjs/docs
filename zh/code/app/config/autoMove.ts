// #应用与引擎配置 - 拖拽至边界时自动平移视图 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'viewport',
    move: { dragOut: true } // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 300, 100))