// #动画 - 只有 x 属性参与动画过渡 [attrs（transition）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    hoverStyle: { x: 500, y: 200 }, // 鼠标 hover 时的过渡效果 // [!code hl]
    transition: {
        duration: 2,
        attrs: ['x'] // 只有 x 属性参与动画过渡 // [!code hl]
    }
}, 0, 100, 50, 50))
