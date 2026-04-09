// #修改元素属性 [修改文本默认填充色为可变颜色 (App)]
import { App, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

Text.changeAttr('fill', (text: Text) => { return text.width === 50 ? 'blue' : 'red' })  //  [!code hl]

const text = new Text({ text: 'Welcome to AppJS' })

app.tree.add(text)

setTimeout(() => {

    text.width = 50

}, 1000)