// #应用与引擎配置 - viewport 视口类型 [实现原理]
import { App, Rect, MoveEvent, ZoomEvent } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    // 以下配置及事件监听 = tree: { type: 'viewport' }  // [!code hl:5]
    tree: {},
    wheel: { preventDefault: true }, // 阻止浏览器默认滚动页面事件
    touch: { preventDefault: true }, // 阻止移动端默认触摸屏滑动页面事件
    pointer: { preventDefaultMenu: true } // 阻止浏览器默认菜单事件
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))

// 平移视图    // [!code hl:9]
app.tree.on(MoveEvent.BEFORE_MOVE, (e: MoveEvent) => {
    app.tree.zoomLayer.move(app.tree.getValidMove(e.moveX, e.moveY))
})

// 缩放视图
app.tree.on(ZoomEvent.BEFORE_ZOOM, (e: ZoomEvent) => {
    app.tree.zoomLayer.scaleOfWorld(e, app.tree.getValidScale(e.scale))
})