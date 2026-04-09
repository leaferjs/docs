// #动画样式 [删除文本动画 (Leafer)]
import { Leafer, Text } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const text = new Text({
    fill: '#32cd79',
    text: 'Welcome to LeaferJS',
    animation: {  // [!code hl:4]
        style: { text: '' },
        duration: 2,
    }
})

leafer.add(text)