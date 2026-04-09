// #动画 - 只有 x 属性参与动画过渡 [attrs（set）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500, y: 200 }, // style keyframe
    {
        duration: 2,
        attrs: ['x'] // 只有 x 属性参与动画过渡 // [!code hl]
    } // options
)