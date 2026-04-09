// #导出图片 [导出二进制数据 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
app.tree.add(rect)

rect.export('png', true).then(result => { // 第2个参数为true表示导出二进制 [!code hl:5]
    console.log(result.data)
})

// const result = await rect.export('png', { blob: true })