// #导出图片 [导出二进制数据 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
app.tree.add(rect)

rect.export('jpg', 0.5).then(result => { // 第2个参数为图片质量，可选参数（默认为0.92） [!code hl:5]
    console.log(result.data)
})

// const result = await rect.export('jpg', {quality: 0.5})