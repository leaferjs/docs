// #HTML 文本
import { Leafer } from 'leafer-ui'
import { HTMLText } from '@leafer-in/html' // 导入 html 插件  // [!code hl] 

const leafer = new Leafer({ view: window })

const text = new HTMLText({
    text: '<i style="color: red; font-weight: bold;">Welcome</i> to <i style="color: #32cd79; font-size: 30px">LeaferJS</i>',
})

leafer.add(text)