// #动画样式 [文本count动画 (Leafer)]
import { Leafer, Text } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const text = new Text({
    fill: '#32cd79',
    text: 0,  // [!code hl:5]
    animation: {
        style: { text: 100 },
        duration: 2
    }
})

leafer.add(text)