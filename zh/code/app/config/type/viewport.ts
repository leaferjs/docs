// #应用与引擎配置 - viewport 视口类型 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'viewport' // 添加视口 // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))