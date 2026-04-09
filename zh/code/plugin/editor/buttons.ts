// #图形编辑器 [添加底部固定按钮]
import { App, Rect, Box, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ // [!code hl:4]
    view: window,
    editor: { buttonsFixed: true }
})

const rect = Rect.one({ editable: true, fill: '#32cd79' }, 100, 100)
app.tree.add(rect)
app.tree.add(Rect.one({ editable: true, fill: '#32cd79' }, 100, 300))

const button = Box.one({  // [!code hl:9] // 添加移除按钮
    around: 'center',
    fill: '#FEB027',
    cornerRadius: 20,
    cursor: 'pointer',
    children: [{ tag: 'Text', fill: 'white', text: '移除', padding: [7, 10] }]
})

app.editor.buttons.add(button)

button.on(PointerEvent.TAP, () => { // 点击删除元素，并取消选择
    app.editor.list.forEach(rect => rect.remove())
    app.editor.target = null
})

app.editor.select(rect)