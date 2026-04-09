// #应用与引擎配置 - 禁用多点触屏功能 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'viewport',
    multiTouch: { disabled: true } // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))