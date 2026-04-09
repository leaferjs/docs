// #导出图片 [导出二进制数据 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('jpg', 0.5).then(result => { // 第2个参数为图片质量，可选参数（默认为0.92） [!code hl:5]
    console.log(result.data)
})

// const result = await rect.export('jpg', {quality: 0.5})