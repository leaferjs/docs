// #模拟平移事件
import { Leafer, Rect, MoveEvent } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 // [!code hl]

const leafer = new Leafer({ view: window, type: 'viewport' })

const rect = new Rect({ x: 100, y: 100, width: 200, height: 200, fill: '#32cd79' })

leafer.add(rect)

rect.on(MoveEvent.MOVE, (e) => {
    console.log('move', e)
})

const { interaction } = leafer

setTimeout(() => {  // [!code hl:5]

    interaction.move({ x: 100, y: 100, moveX: -100, moveY: -100 })

}, 1000)