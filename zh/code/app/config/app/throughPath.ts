// #应用与引擎配置 - 获取穿透路径 [App]
import { App, Rect, PointerEvent } from 'leafer-ui'

const app = new App({
    view: window,
    tree: {},
    pointer: { through: true }  // [!code hl]
})

const data = { x: 100, y: 100, fill: '#32cd00' }

const bottomRect = new Rect(data)
app.tree.add(bottomRect)

const rect = new Rect(data)
app.tree.add(rect)

rect.on(PointerEvent.DOWN, (e: PointerEvent) => {
    console.log(e.throughPath) // { list: [bottomRect, rect, leafer] }
})