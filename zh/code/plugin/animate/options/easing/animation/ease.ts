// #动画 - 缓动方式  [ease（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        easing: 'ease',  // ease 缓动：慢速开始，中间快，缓慢结束 // [!code hl]
        duration: 2,
        loop: true
    }
}, 0, 100, 50, 50))
