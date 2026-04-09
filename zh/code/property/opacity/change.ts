// #设置不透明度 (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    // #region main
    // 设置不透明度
    rect.opacity = 0.5
    // #endregion main

}, 1000)