// #光标按下时的交互样式 (Leafer)
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: 'rgba(50,205,121, 0.7)',
    cornerRadius: 30,
    pressStyle: { // [!code hl:3] // press 样式
        fill: 'rgba(50,205,121, 1)'
    }
})

leafer.add(rect)