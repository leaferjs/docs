// #创建 Box [自适应文本 (Leafer)]
import { Leafer, Box } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: '#333' })

// Box 不设置宽高时，将自适应内容
const box = new Box({
    x: 100,
    y: 100,
    fill: '#FF4B4B',
    cornerRadius: 20,
    children: [{
        tag: 'Text',
        text: 'Welcome to LeaferJS',
        fill: 'black',
        padding: [10, 20],
        textAlign: 'left',
        verticalAlign: 'top'
    }]
})

leafer.add(box)