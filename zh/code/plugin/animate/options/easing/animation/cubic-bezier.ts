// #动画 - 缓动方式  [cubic-bezier（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        easing: { name: 'cubic-bezier', value: [0.5, 0.1, 0.25, 1] },  // 自定义缓动曲线 // [!code hl]
        duration: 2,
        loop: true
    }
}, 0, 100, 50, 50))
