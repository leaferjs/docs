// #创建 Text [占位符文本 (App)]
import { App, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/text-editor' // 导入文本编辑插件 

const app = new App({ view: window, editor: {} })

const text = new Text({
    fill: '#32cd79',
    placeholder: '请输入文本', // 占位符文本 // [!code hl:2] 
    placeholderColor: 'rgba(120,120,120,0.5)',  // 占位符颜色
    editable: true
})

app.tree.add(text)