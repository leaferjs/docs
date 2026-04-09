// #导出图片 [画面截图 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))

leafer.export('screenshot.png', { screenshot: true }) // 将当前引擎画布进行截图导出 [!code hl:3]

// const result = await leafer.export('screenshot.png', {screenshot: true}