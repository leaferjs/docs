// #创建 Text [占位符样式 (Leafer)]
import { Leafer, Text } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const text = new Text({
    fill: '#32cd79',
    placeholder: '请输入文本', // 占位符文本 // [!code hl:4] 
    placeholderStyle: {  // 占位符样式
        fill: 'gray'
    }
})

leafer.add(text)

setTimeout(() => {

    text.text = 'Welcome to LeaferJS'

}, 1000)