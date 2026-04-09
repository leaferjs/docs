// #动画 - 缓动方式  [linear（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        easing: 'linear',  // 线性缓动：匀速进行 // [!code hl]
        duration: 2,
        loop: true
    }
}, 0, 100, 50, 50))
