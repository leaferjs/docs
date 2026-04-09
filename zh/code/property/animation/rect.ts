// #动画样式 [摇摆动画 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = new Rect({
    y: 100,
    cornerRadius: 50,
    fill: '#32cd79',
    animation: { // [!code hl:6]
        style: { x: 500, cornerRadius: 0 }, // style keyframe
        // options
        duration: 1,
        swing: true
    }
})

leafer.add(rect)
