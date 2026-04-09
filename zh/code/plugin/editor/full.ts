// #图形编辑器 [实现原理]
import { App, Rect } from 'leafer-ui'
import { Editor } from '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window }) // [!code hl:7]

app.tree = app.addLeafer({ type: 'design' }) // 添加 tree 层
app.sky = app.addLeafer() // 添加 sky 层

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))

app.sky.add(app.editor = new Editor())  // 添加图形编辑器，用于选中元素进行编辑操作 [!code hl:7]