// #应用与引擎配置 - 锁定单一手势操作 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'viewport',
    mobile: true, // 适配移动端
    multiTouch: {
        singleGesture: true // 识别并锁定单一手势操作 // [!code hl]
    }
})

leafer.add(Rect.one({ fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
leafer.add(Rect.one({ ill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))