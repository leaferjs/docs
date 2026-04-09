// #自定义状态 [切换状态 (Leafer)] 
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件 // [!code hl] 
import '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: '#32cd79',
    cornerRadius: 30,
    origin: 'center',
    states: { // 自定义状态列表 // [!code hl:5] 
        color: { fill: '#FEB027' },
        rotate: { animation: { keyframes: [{ rotation: 45 }, { rotation: 135, scale: 1.2 }], duration: 1, swing: true } }
    },
    state: 'color', // 设置状态
    transition: 1
})

leafer.add(rect)

rect.on('click', () => { // 点击切换状态  // [!code hl:2]
    rect.state = rect.state === 'color' ? 'rotate' : 'color'
})