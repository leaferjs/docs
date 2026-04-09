// #创建 Text [标准创建 (App)]
import { App, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/text-editor' // 导入文本编辑插件 

const app = new App({ view: window, editor: {} })

const text = new Text({
    fill: '#32cd79',
    text: 'Welcome to LeaferJS',
    editable: true
})

app.tree.add(text)