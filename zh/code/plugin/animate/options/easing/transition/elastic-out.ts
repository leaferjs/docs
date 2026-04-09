// #动画 - 缓动方式  [elastic-out（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        easing: 'elastic-out',  // 多次回弹结束 // [!code hl]
        duration: 2
    }
}, 0, 100, 50, 50))
