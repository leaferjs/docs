// #显示矩形元素的 innerName (App)
import { App, Rect, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 0, 30)

app.tree.add(rect)

app.tree.add(new Text({ text: rect.innerName, fill: '#32cd79' }))  // [!code hl] 
