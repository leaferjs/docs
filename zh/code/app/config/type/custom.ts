// #应用与引擎配置 - custom 视口类型 [Leafer]
import { Leafer, Rect, MoveEvent, ZoomEvent } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'custom' // 添加自定义视口 // [!code hl]
})

// 需要自定义平移视图逻辑    // [!code hl:11]
leafer.on(MoveEvent.BEFORE_MOVE, (e: MoveEvent) => {
    const { x, y } = leafer.getValidMove(e.moveX, e.moveY)
    leafer.zoomLayer.move(x, y)
})

// 需要自定义缩放视图逻辑
leafer.on(ZoomEvent.BEFORE_ZOOM, (e: ZoomEvent) => {
    const center = { x: e.x, y: e.y }
    leafer.zoomLayer.scaleOfWorld(center, leafer.getValidScale(e.scale))
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))