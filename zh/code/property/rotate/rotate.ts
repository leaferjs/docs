// #通过 rotateOf() 旋转元素 [无动画过渡 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    // 围绕中心点继续旋转 45度
    rect.rotateOf('center', 45) // [!code hl]

}, 1000)