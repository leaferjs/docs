// #创建 Text [带背景框样式 (App)]
import { App, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/text-editor' // 导入文本编辑插件 

const app = new App({ view: window, editor: {} })

const text = new Text({
    fill: 'black',
    text: 'Welcome to LeaferJS',
    padding: 10,
    boxStyle: { // 设置背景框样式 // [!code hl:5]
        fill: '#32cd79',
        stroke: 'black',
        cornerRadius: 6
    },
    editable: true
})

app.tree.add(text)