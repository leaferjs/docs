// #通过 skewOf() 倾斜元素 [有动画过渡 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    // 围绕中心继续倾斜X轴 45度
    rect.rotateOf('center', 45, true) // [!code hl]

}, 1000)