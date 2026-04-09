// #文本编辑器
import { App, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件  
import '@leafer-in/viewport' // 导入视口插件（可选）
import '@leafer-in/text-editor' // 导入文本编辑插件 // [!code hl] 

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Text.one({ // [!code hl:4] 
    text: 'Action is the proper fruit of knowledge.',
    editable: true, fill: '#FFE04B', fontSize: 16,
}, 100, 100, 100))  