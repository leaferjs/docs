// #图形编辑器 [拖拽控制点修改字体大小，拖拽边框控制文本宽高]
import { App, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/text-editor' // 导入文本编辑插件 (可选)
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        editSize: 'size', // 默认修改元素宽高
        point: {  // [!code hl:3] 
            editConfig: { editSize: 'font-size' } // 拖拽控制点修改字体大小
        }
    }
})

const text = Text.one({
    text: 'Action is the proper fruit of knowledge.',
    editable: true, fill: '#FFE04B', fontSize: 16,
}, 100, 100, 100)

app.tree.add(text)

app.editor.select(text)