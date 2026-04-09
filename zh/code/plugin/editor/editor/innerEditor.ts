// #图形编辑器 [打开内部编辑器]
import { App, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件  
import '@leafer-in/viewport' // 导入视口插件（可选）
import '@leafer-in/text-editor' // 导入文本编辑插件

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Text.one({
    text: 'Action is the proper fruit of knowledge.',
    editable: true, fill: '#FFE04B', fontSize: 16,
}, 100, 100, 100))


setTimeout(() => {

    // 手动选择元文本并打开内部编辑器，进入编辑文本状态
    app.editor.openInnerEditor(app.tree.children[0], true) // [!code hl]

}, 1000)
