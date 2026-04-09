// #修改元素属性 [修改文本默认填充色为红色 (Leafer)]
import { Leafer, Text } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Text.changeAttr('fill', 'red')  //  [!code hl]

const text = new Text({ text: 'Welcome to LeaferJS' })

leafer.add(text)