// #动画 - 监听动画事件 [event（animation）]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件 // [!code hl]

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({
    fill: '#32cd79',
    animation: {
        style: { x: 500 }, // style keyframe
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
    }
}, 0, 100, 50, 50))
