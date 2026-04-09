// #动画 - 缓动方式  [cubic-bezier（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        easing: { name: 'cubic-bezier', value: [0.5, 0.1, 0.25, 1] },  // 自定义缓动曲线 // [!code hl]
        duration: 2
    }
}, 0, 100, 50, 50))
