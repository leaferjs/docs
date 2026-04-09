// #App结构 - 图形编辑器 [简化]
import { App, Frame, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ // [!code hl:7]
    view: window,
    fill: '#333',
    editor: {},  //  配置 editor 会自动创建并添加 app.editor 实例、tree 层、sky 层
    //  tree: { type: 'design' },
    //  sky: {}
})

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))

// app.sky.add(app.editor = new Editor()) // 添加图形编辑器，用于选中元素进行编辑操作 // [!code hl]
