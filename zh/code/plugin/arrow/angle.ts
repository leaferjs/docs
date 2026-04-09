// #箭头样式 [角度箭头]
import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow' // 导入箭头插件 // [!code hl]

const leafer = new Leafer({ view: window })

const arrow = new Arrow({  // [!code hl:5]
    y: 50,
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(arrow)