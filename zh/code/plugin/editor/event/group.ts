// #图形编辑器 [元素编组事件]
import { App, Rect } from 'leafer-ui'
import { EditorGroupEvent } from '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 100, 100))
app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 300, 100))

setTimeout(() => {

    // 手动选择并编组元素 
    app.editor.select(app.tree.children)
    app.editor.group()

}, 1000)

app.editor.on(EditorGroupEvent.GROUP, (e: EditorGroupEvent) => { // [!code hl:3]
    console.log(e.editTarget)
})