// #动画 - 缓动方式  [ease（animate）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.animate(
    { x: 500 }, // style keyframe
    {
        easing: 'ease',  // ease 缓动： 慢速开始，中间快，缓慢结束 // [!code hl]
        duration: 2,
        loop: true
    } // options
)