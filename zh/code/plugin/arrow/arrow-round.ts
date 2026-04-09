// #箭头样式 [标准箭头 - 箭头都变得平滑]
import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow' // 导入箭头插件 // [!code hl]

const leafer = new Leafer({ view: window })

const arrow = new Arrow({
    y: 50,
    endArrow: 'arrow',  // [!code hl:3]
    strokeCap: 'round',
    strokeJoin: 'round',
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(arrow)