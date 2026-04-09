// #动画 - 通过 destroy() 方法销毁动画
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

const animate = new Animate(
    rect,
    { x: 500 }, // style keyframe
    {
        duration: 2
    } // options
)

// 通过 destroy() 方法销毁动画，不会执行完成动画操作，仅停留在当前动画状态 // [!code hl:5]
setTimeout(() => {

    animate.destroy()

}, 500)
