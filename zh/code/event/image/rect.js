// #监听 fill 图片事件 [加载成功]
import { Leafer, Rect, ImageEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({  // [!code hl:8]
    fill: { type: 'image', url: '/image/leafer.jpg' },
    draggable: true
})

rect.once(ImageEvent.LOADED, function (e) {
    console.log(e)
})

leafer.add(rect)