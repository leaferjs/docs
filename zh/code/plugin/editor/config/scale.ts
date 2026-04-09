// #图形编辑器 [scale模式]
import { App, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({  // [!code hl:4]
    view: window,
    editor: { editSize: 'scale' }
})

const text = Text.one({
    editable: true,
    text: 'Editor',
    fontSize: 24,
    verticalAlign: 'middle',
    textAlign: 'center',
    fontWeight: 'bold'
}, 100, 100, 100, 100)

app.tree.add(text)

app.editor.target = text