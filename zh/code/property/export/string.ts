// #导出图片 [导出 Base64 编码数据 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('jpg').then(result => { // 可设置图片质量 export('jpg', 0.92), 默认为0.92 // [!code hl:5]
    console.log(result.data)
})

// const result = await rect.export('jpg')