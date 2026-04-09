// #新增元素属性 [为文本新增一个可变 float 属性 (Leafer)]
import { Leafer, Text } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Text.addAttr('float', (text: Text) => { return text.width === 200 ? 'center' : 'left' })  //  [!code hl]

// default float

const text = new Text({ text: 'Welcome to LeaferJS' })

leafer.add(text)

console.log((text as any).float) // left

text.width = 200

console.log((text as any).float) // right

// set float

const text2 = new Text({ float: 'right' } as any)

console.log((text2 as any).float) // right