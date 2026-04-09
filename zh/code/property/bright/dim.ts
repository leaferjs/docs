// #突出显示并置顶渲染，淡化其他元素 [leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/bright' // 导入突出显示元素插件  // [!code hl]

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79', draggable: true }, 260, 150)

leafer.add(Rect.one({ fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
leafer.add(rect)
leafer.add(Rect.one({ fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 320, 100))

setTimeout(() => {

    rect.bright = true // 突出显示，置顶渲染 // [!code hl:4]

    leafer.dim = true // 淡化其他元素 
    // leafer.dim = 0.2 // 可指定淡化的透明度

}, 1000)