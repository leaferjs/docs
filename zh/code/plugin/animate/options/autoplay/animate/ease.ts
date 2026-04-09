// #动画 - 不自动播放，监听点击 rect 再播放 [autoplay（animate）]
import { Leafer, Rect, PointerEvent } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

const animate = rect.animate(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        autoplay: false // 不自动播放 // [!code hl]
    } // options
)

// 监听点击 rect 开始动画 // [!code hl:3]
rect.on(PointerEvent.TAP, () => {
    animate.play()
})
