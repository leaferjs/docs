// #动画 - 动画结束时回到起始状态  [from（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 2,
        ending: 'from' // 动画结束时回到起始状态 // [!code hl]
    }
}, 0, 100, 50, 50))
