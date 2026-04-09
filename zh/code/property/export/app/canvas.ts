// #导出图片 [导出画布 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
app.tree.add(rect)

rect.export('canvas').then(result => { // [!code hl:11]
    const leaferCanvas = result.data
    const canvas = leaferCanvas.view
    const context = leaferCanvas.context

    console.log('canvas', canvas) // HTMLCanvasElement
    console.log('2d context', context) // CanvasRenderingContext2D

    // 有和rect.export() 一样的导出函数，导出结果直接是一个data
    leaferCanvas.export('a.jpg', 0.9) // options只能设置图像相关的参数
})

// const result = await rect.export('canvas')