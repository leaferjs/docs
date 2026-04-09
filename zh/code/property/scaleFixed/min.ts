// #scaleFixed [画布缩放到0.5时才跟随缩小 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
leafer.add(Rect.one({
    scaleFixed: 0.5, // 画布缩放到0.5时，才跟随缩小 // [!code hl]
    editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0]
}, 300, 100))

setTimeout(() => {

    leafer.scale = 0.5 // 画面缩小到0.5倍

}, 1000)