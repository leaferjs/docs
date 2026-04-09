// #动画 - 延迟执行  [delay（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        delay: 1, // 延迟 1 秒开始动画 // [!code hl]
        duration: 2
    }
}, 0, 100, 50, 50))
