// #导出图片 [画面截图 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100))

app.export('screenshot.png', { screenshot: true }) // 将当前App画布进行截图导出 [!code hl:3]

// const result = await app.export('screenshot.png', {screenshot: true}