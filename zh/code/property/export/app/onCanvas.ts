// #导出图片 [绘制水印 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
app.tree.add(rect)

rect.export('test.png', {
    pixelRatio: 2,
    onCanvas(canvas) {  // 通过onCanvas钩子函数绘制水印 // [!code hl:10]
        const {
            context,  // CanvasRenderingContext2D，原生canvas上下文对象
            pixelRatio, // 像素比
            width, // 逻辑宽度， 获取实际像素宽度请使用 pixelWidth
            height // 逻辑高度， 获取实际像素高度请使用 pixelHeight
        } = canvas
        context.scale(pixelRatio, pixelRatio) // 抹平像素比差异
        context.fillText('绘制水印', width - 60, height - 20)
    }
})