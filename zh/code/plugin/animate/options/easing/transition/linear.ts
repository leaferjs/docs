// #动画 - 缓动方式  [linear（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        easing: 'linear',  // 线性缓动：匀速进行 // [!code hl]
        duration: 2
    }
}, 0, 100, 50, 50))
