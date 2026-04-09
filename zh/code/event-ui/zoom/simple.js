// #监听缩放交互事件
import { Leafer, Rect, ZoomEvent, LeafHelper } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 // [!code hl]

const leafer = new Leafer({
    view: window,
    type: 'custom'
})

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(ZoomEvent.ZOOM, function (e) { // [!code hl:4]
    const center = { x: e.x, y: e.y }
    LeafHelper.zoomOfWorld(leafer, center, e.scale)
})