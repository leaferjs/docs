// #交互状态 [同步 hover 状态的按钮 (Leafer)]
import { Leafer, Box } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件 // [!code hl] 

const leafer = new Leafer({ view: window, fill: '#333' })

const box = new Box({
    x: 100,
    y: 100,
    fill: '#FEB027',
    cornerRadius: 5,

    button: true, // 标记为按钮，子元素 Text 将自动同步交互状态 // [!code hl:10]
    hoverStyle: { fill: '#32cd79' }, // 鼠标hover状态
    pressStyle: { fill: '#FF4B4B' }, // 鼠标按下状态

    children: [{
        tag: 'Text',
        text: 'Button',
        fontSize: 16,
        padding: [10, 20],
        fill: 'black',
        hoverStyle: { fill: 'white' }, // 鼠标在 button 上hover的状态  // [!code hl:1]
        pressStyle: { fontWeight: 'bold' }  // 鼠标在 button 上按下的状态
    }]
})

leafer.add(box)