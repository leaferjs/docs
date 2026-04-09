// #箭头样式 [箭头增量旋转30度]
import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow' // 导入箭头插件 // [!code hl]

const leafer = new Leafer({ view: window })

const arrow = new Arrow({
    y: 50,
    stroke: '#32cd79',
    strokeWidth: 5,
    endArrow: {
        type: 'angle',
        rotation: 30, // 箭头增量旋转30度 [!code hl]
    }
})

leafer.add(arrow)