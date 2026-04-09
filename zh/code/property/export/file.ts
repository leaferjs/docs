// #导出图片 [导出文件 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('test.png') // 传文件名参数，浏览器版会直接下载文件，Node.js 版会保存到指定路径 // [!code hl:3]

// const result = await rect.export('./home/test.png')