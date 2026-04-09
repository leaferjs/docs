// #过渡效果 [按钮交互 (Leafer)]
import { Leafer, Box } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件 // [!code hl:2] 
import '@leafer-in/animate' // 导入动画插件  

const leafer = new Leafer({ view: window })

const box = new Box({
    x: 100,
    y: 100,
    fill: '#32cd79',
    cornerRadius: 5,
    origin: 'center', // 从中心缩放

    button: true, // 标记为按钮，子元素 Text 将自动同步交互状态 // [!code hl:10]
    hoverStyle: { // 鼠标hover状态
        fill: '#FF4B4B',
        scale: 1.5,
        cornerRadius: 20,
    },
    pressStyle: { // 鼠标按下状态
        fill: '#FEB027',
        scale: 1.1,
        transitionOut: 'bounce-out' // 退出状态时的过渡方式
    },

    children: [{
        tag: 'Text',
        text: 'Button',
        fontSize: 16,
        fontWeight: 'bold',
        padding: [10, 20],
        fill: 'rgba(0,0,0,0.5)',
        hoverStyle: { fill: 'black' } // 鼠标 hover 到 button 上的状态  // [!code hl:1]
    }]
})

leafer.add(box)