// #动画 - 缓动方式  [elastic-out（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        easing: 'elastic-out',  // 多次回弹结束 // [!code hl]
        duration: 2
    } // options
)