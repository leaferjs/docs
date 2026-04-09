// #新增元素属性 [为文本新增一个 dataType 类型的属性 (App)]
import { App, Text, dataType } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

Text.addAttr('version', '2.0.7', dataType)  //  [!code hl]

// default version

const text = new Text({ text: 'Welcome to AppJS' })

app.tree.add(text)

console.log((text as any).version) // 2.0.7

// set version

const text2 = new Text({ version: '2.0.7' } as any)

console.log((text2 as any).version) // 2.0.7