// #自定义状态 [切换状态 (App)] 
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 // [!code hl] 
import '@leafer-in/animate' // 导入动画插件

const app = new App({ view: window, editor: {} })

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

app.tree.add(rect)

rect.on('click', () => { // 点击切换状态  // [!code hl:2]
    rect.state = rect.state === 'color' ? 'rotate' : 'color'
})