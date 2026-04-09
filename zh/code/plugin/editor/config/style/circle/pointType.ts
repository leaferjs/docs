// #图形编辑器 [自定义 circle 控制点功能类型]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        circle: // [!code hl:19]
        {
            // 支持 Box 元素的所有属性
            pointType: 'button', // 变为自定义按钮
            width: 24,
            height: 24,
            event: {
                tap: function () {
                    alert('button')
                },
            },
            fill: {
                // 使用图片
                type: 'image',
                url: '/image/leafer.jpg',
            },
        }
    }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.select(rect)