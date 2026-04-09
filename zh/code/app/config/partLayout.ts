// #应用与引擎配置 - 关闭局部布局 [Leafer]
import { Leafer, Rect, Debug } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    usePartLayout: false // [!code hl]
})

Debug.showRepaint = true

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))