// #导出图片 [导出 Base64 编码数据 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
app.tree.add(rect)

rect.export('jpg').then(result => { // 可设置图片质量 export('jpg', 0.92), 默认为0.92 // [!code hl:5]
    console.log(result.data)
})

// const result = await rect.export('jpg')