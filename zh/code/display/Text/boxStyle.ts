// #创建 Text [带背景框样式 (Leafer)]
import { Leafer, Text } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件 
import '@leafer-in/animate' // 导入动画插件  

const leafer = new Leafer({ view: window })

const text = new Text({
    fill: 'black',
    text: 'Welcome to LeaferJS',
    padding: 10,
    boxStyle: { // 设置背景框样式 // [!code hl:5]
        fill: '#32cd79',
        stroke: 'black',
        cornerRadius: 6
    },
    hoverStyle: { // hover 样式
        boxStyle: {
            fill: '#FF4B4B',
            cornerRadius: 20
        }
    }
})

leafer.add(text)