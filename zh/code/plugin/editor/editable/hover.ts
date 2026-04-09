// #图形编辑器 [元素单独配置hover样式]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {}  //  配置 editor 会自动创建并添加 app.editor 实例、tree 层、sky 层
})

app.tree.add(Rect.one({
    editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20],
    editConfig: { hoverStyle: { stroke: 'red' } }, // 单独配置 hover 编辑样式 // [!code hl] 
}, 100, 100))

app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))
