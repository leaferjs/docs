// #通过 set() 修改属性 [无动画过渡 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' })

leafer.add(rect)

setTimeout(() => {

    // 设置元素的位置
    rect.set({ x: 100, y: 100 }) // [!code hl]

}, 1000)