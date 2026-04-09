// #突出显示，置顶渲染元素 [leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/bright' // 导入突出显示元素插件  // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79', draggable: true }, 260, 150)

leafer.add(Rect.one({ fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
leafer.add(rect)
leafer.add(Rect.one({ fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 320, 100))

setTimeout(() => {

    rect.bright = true // 突出显示，置顶渲染 // [!code hl]

}, 1000)