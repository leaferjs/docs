// #监听旋转交互事件
import { Leafer, Rect, RotateEvent, LeafHelper } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 // [!code hl]

const leafer = new Leafer({
    view: window,
    type: 'custom'
})

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(RotateEvent.ROTATE, function (e: RotateEvent) { // [!code hl:4]
    const center = { x: e.x, y: e.y }
    LeafHelper.rotateOfWorld(leafer, center, e.rotation)
})