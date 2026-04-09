// #元素包围盒 [检测 rect2 是否与 rect1 碰撞]
import { Leafer, Frame, Rect, DragEvent, Bounds } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: '#333' })

const rect1 = Rect.one({ fill: '#FEB027', draggable: true }, 100, 100)

leafer.add(Frame.one({ children: [rect1] }, 100, 100, 500, 600)) // rect1 在 frame 内

const rect2 = Rect.one({ fill: '#FFE04B', draggable: true }, 200, 50)  // rect2 在 frame 外

leafer.add(rect2)

// 检测 rect2 是否与 rect1 碰撞 （通过世界坐标中的 box 包围盒跨层级检测）
rect2.on(DragEvent.DRAG, () => {

    const rect2Bounds = new Bounds(rect2.worldBoxBounds)  // [!code hl:2]
    rect1.stroke = rect2Bounds.hit(rect1.worldBoxBounds) ? 'blue' : '' // 碰撞则显示蓝色边框

})