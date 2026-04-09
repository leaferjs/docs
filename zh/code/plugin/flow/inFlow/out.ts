// #自动布局 - 子元素不加入自动布局 
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] }),
        new Box({
            inFlow: false,  // 元素不加入自动布局，通过坐标定位 // [!code hl]
            x: 50, y: 110, fill: '#FF4B4B', around: 'top', children: [{ tag: 'Text', text: 'false', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 30, height: 20 }]
        })

    ],
})

leafer.add(flow)