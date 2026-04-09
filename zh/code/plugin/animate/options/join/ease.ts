// #动画 - 加入动画前的元素状态作为 from 关键帧 [join（Animate）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

new Animate(
    rect,
    [{ x: 500 }, { x: 200 }], // style keyframe
    {
        duration: 2,
        join: true // 加入动画前的元素状态作为 from 关键帧 {x: 0} // [!code hl]
    } // options
)