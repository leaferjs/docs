// #动画 - 循环 2 次  [loop（animation）]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
        duration: 2,
        loop: 2 // 循环 2 次动画 // [!code hl]
    }
}, 0, 100, 50, 50))
