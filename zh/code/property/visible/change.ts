// #隐藏元素 (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    // #region main
    // 隐藏元素
    rect.visible = false
    // #endregion main

}, 1000)