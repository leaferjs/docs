// #新增元素属性 [为文本新增一个可变 float 属性 (App)]
import { App, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

Text.addAttr('float', (text: Text) => { return text.width === 200 ? 'center' : 'left' })  //  [!code hl]

// default float

const text = new Text({ text: 'Welcome to AppJS' })

app.tree.add(text)

console.log((text as any).float) // left

text.width = 200

console.log((text as any).float) // right

// set float

const text2 = new Text({ float: 'right' } as any)

console.log((text2 as any).float) // right