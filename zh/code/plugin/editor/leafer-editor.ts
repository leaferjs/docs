// #图形编辑器 [引入leafer-editor]
import { App, Rect } from 'leafer-editor'

const app = new App({ // [!code hl:4]
    view: window,
    editor: {} // 会自动创建 editor实例、tree层、sky层
})

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))