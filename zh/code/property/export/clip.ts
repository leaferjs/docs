// #导出图片 [裁剪元素 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: "#32cd79"
})

leafer.add(ellipse)

ellipse.export('clip.jpg', {
    clip: { x: 50, y: 50, width: 50, height: 50 }  // 对导出元素进行裁剪 // [!code hl]
})