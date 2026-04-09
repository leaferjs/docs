// #滚动条 [自定义样式]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件
import { ScrollBar } from '@leafer-in/scroll' // 导入滚动条插件  // [!code hl] 

const app = new App({ view: window, fill: '#000', editor: {} })

new ScrollBar(app, { theme: { fill: '#32cd79' } })  // [!code hl:1]

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 500, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 650, 2400))