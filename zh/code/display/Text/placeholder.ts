// #创建 Text [占位符文本 (Leafer)]
import { Leafer, Text } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const text = new Text({
    fill: '#32cd79',
    placeholder: '请输入文本', // 占位符文本 // [!code hl:2] 
    placeholderColor: 'rgba(120,120,120,0.5)',  // 占位符颜色
})

leafer.add(text)

setTimeout(() => {

    text.text = 'Welcome to LeaferJS'

}, 1000)