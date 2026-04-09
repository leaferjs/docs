// #动画 - 监听动画事件 [event（set）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 100, 50, 50)

leafer.add(rect)

rect.set(
    { x: 500 }, // style keyframe
    {
        duration: 2,
        event: { // 监听动画事件 // [!code hl:11]
            created() { // 动画创建
                console.log('created')
            },
            update(animate: Animate) {  // 更新中...
                console.log(animate.style.x)
            },
            completed() {  // 动画已完成
                console.log('completed')
            },
        }
    } // options
)