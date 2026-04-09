// #突出显示并置顶渲染，淡化其他元素 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 
import '@leafer-in/bright' // 导入突出显示元素插件  // [!code hl]
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        bright: true, // 突出显示、置顶渲染选中元素 // [!code hl:2]
        dimOthers: true, // 淡化其他元素
        //dimOthers: 0.2 // 可指定淡化的透明度
    }
})

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#32cd79' }, 260, 150))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 320, 100))

setTimeout(() => { app.editor.select(app.tree.children[1]) }, 1000) // 模拟旋转元素