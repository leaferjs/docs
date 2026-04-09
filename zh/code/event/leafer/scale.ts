// #监听 Leafer 事件 - 缩放变化事件
import { Leafer, Rect, LeaferEvent } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 // [!code hl]

const leafer = new Leafer({ view: window, type: 'viewport' })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(LeaferEvent.SCALE, function () { // [!code hl:4]
    // 缩放视图、或修改scale后，这里可以实时收到缩放比例变化
    console.log('leafer.scale', leafer.scaleX)
})  
