// #导出图片 [裁剪元素 (App)]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const ellipse = new Ellipse({
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: "#32cd79"
})

app.tree.add(ellipse)

ellipse.export('clip.jpg', {
    clip: { x: 50, y: 50, width: 50, height: 50 }  // 对导出元素进行裁剪 // [!code hl]
})