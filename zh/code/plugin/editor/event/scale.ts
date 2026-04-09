// #图形编辑器 [缩放元素事件（resize）]
import { App, Rect } from 'leafer-ui'
import { EditorScaleEvent } from '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 100, 100))
app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, 300, 100))

app.editor.on(EditorScaleEvent.SCALE, (e: EditorScaleEvent) => { // [!code hl:3]
    console.log(e.scaleX, e.scaleY, e.transform)
})