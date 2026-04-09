// #动画 - 以5倍速播放动画 [speed（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 2,
        speed: 5 // 以5倍速播放动画 // [!code hl]
    }
}, 0, 100, 50, 50))
