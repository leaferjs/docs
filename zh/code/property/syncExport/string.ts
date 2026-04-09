// #导出图片 [同步导出 Base64 编码数据 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

// 同步导出图片，前提：需确认异步加载的图片已经完成，才能同步导出 [!code hl:3]
const result = rect.syncExport('jpg') // 可设置图片质量 syncExport('jpg', 0.92), 默认为0.92
console.log(result.data)