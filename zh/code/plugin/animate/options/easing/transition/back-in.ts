// #动画 - 缓动方式  [back-in（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        easing: 'back-in',  // 拉力进入 // [!code hl]
        duration: 2
    }
}, 50, 100, 50, 50))