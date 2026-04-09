// #自动布局
import { Leafer, Rect, Star, Ellipse } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    flow: 'y',  // [!code hl:4] 
    gap: { x: 'auto', y: 20 },
    flowAlign: { content: 'top', x: 'from' },
    flowWrap: true,
    x: 100,
    y: 100,
    width: 260,
    height: 260,
    fill: '#333'
})

const rect = new Rect({ fill: 'red' })
const star = new Star({ fill: 'green', x: 800, height: 100 })
const ellipse = new Ellipse({ fill: 'blue' })
flow.add([rect, star, ellipse])

leafer.add(flow)