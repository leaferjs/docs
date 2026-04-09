// #动画 - 时长  [duration（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 5, // 动画时长为 5 秒 // [!code hl]
        loop: true
    }
}, 0, 100, 50, 50))
