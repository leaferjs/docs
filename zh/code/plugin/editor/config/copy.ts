// #图形编辑器 [按住alt键移动可复制元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        onCopy() {  // 按住alt键移动可复制元素 // [!code hl]
            const list = app.editor.list.map(item => {
                const cloneItem = item.clone()
                item.parent.add(cloneItem)
                return cloneItem
            })
            app.editor.target = list.length > 1 ? list : list[0]
            return true
        }
    }
})

app.tree.add({ tag: 'Text', x: 150, y: 50, text: '按住alt键移动可复制元素', fill: '#999', fontSize: 16 })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))
