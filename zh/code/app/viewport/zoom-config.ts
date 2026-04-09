// #应用与引擎配置 - 控制视图缩放范围 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'viewport',
    zoom: { min: 0.02, max: 256 } // [!code hl]
})

leafer.add(new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true }))