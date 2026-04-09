// #箭头样式 [箭头大小放大2倍]
import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow' // 导入箭头插件 // [!code hl]

const leafer = new Leafer({ view: window })

const arrow = new Arrow({
    y: 50,
    stroke: '#32cd79',
    endArrow: {
        type: 'triangle',
        scale: 2, // 箭头大小放大2倍 [!code hl]
    }
})

leafer.add(arrow)