// #动画样式 [打字机动画 (App)]
import { App, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/animate' // 导入动画插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const text = new Text({
    fill: '#32cd79',
    animation: {  // [!code hl:4]
        style: { text: 'Welcome to AppJS' },
        duration: 2,
    }
})

app.tree.add(text)