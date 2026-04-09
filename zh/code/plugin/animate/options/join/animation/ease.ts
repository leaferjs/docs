// #动画 - 加入动画前的元素状态作为 from 关键帧 [join（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        keyframes: [{ x: 500 }, { x: 200 }], // style keyframe
        duration: 2,
        join: true // 加入动画前的元素状态作为 from 关键帧 {x: 0} // [!code hl]
    }
}, 0, 100, 50, 50))
