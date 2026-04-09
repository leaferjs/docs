// #图形编辑器 [显示所有控制点]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({  // [!code hl:7]
    view: window,
    editor: {
        circle: {},
        middlePoint: {},
        buttonsDirection: 'top'
    }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.select(rect)