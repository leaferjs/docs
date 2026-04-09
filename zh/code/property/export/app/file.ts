// #导出图片 [导出文件 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
app.tree.add(rect)

rect.export('test.png') // 传文件名参数，浏览器版会直接下载文件，Node.js 版会保存到指定路径 // [!code hl:3]

// const result = await rect.export('./home/test.png')