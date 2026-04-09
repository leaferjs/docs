// #箭头样式 [角度箭头 - 箭头变得平滑]
import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow' // 导入箭头插件 // [!code hl]

const leafer = new Leafer({ view: window })

const arrow = new Arrow({
    y: 50,
    strokeCap: 'round', // [!code hl:2]
    strokeJoin: 'round',
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(arrow)