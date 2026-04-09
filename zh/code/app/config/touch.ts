// #应用与引擎配置 - 阻止移动端默认滑动页面事件 [Leafer]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    touch: { preventDefault: true } // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))