// #应用与引擎配置 - 鼠标滚动直接缩放视图 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'viewport',
    wheel: { zoomMode: true } // [!code hl]
})

leafer.add(new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true }))