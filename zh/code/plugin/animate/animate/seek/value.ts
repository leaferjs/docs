// #动画 - 通过 seek() 方法定位跳转动画 [数值（秒数）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

const animate = new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        duration: 2,
        autoplay: false // 不自动播放 // [!code hl]
    } // options
)

// 通过 seek() 方法定位跳转动画 // [!code hl:5]
setTimeout(() => {

    animate.seek(0.5)

}, 1000)
