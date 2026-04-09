// #模拟旋转事件
import { Leafer, Rect, RotateEvent } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 // [!code hl]

const leafer = new Leafer({ view: window, type: 'viewport' })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79' })

leafer.add(rect)

rect.on(RotateEvent.ROTATE, (e: RotateEvent) => {
    rect.rotation += e.rotation
    console.log('rotate', e)
})

const { interaction } = leafer

setTimeout(() => {   // [!code hl:6]

    // origin is {x: 100, y: 100}
    interaction.rotate({ x: 100, y: 100, rotation: 30 })

}, 1000)