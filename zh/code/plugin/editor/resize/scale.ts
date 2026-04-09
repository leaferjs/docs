// #图形编辑器 [添加底部固定按钮]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 0, 0, 100, 100)

app.tree.add(rect)


const resize = true // [!code hl:5]

rect.scaleOf({ x: 0, y: 0 }, 2, 2, resize) // scale值将转为宽高

console.log(rect.scaleX, rect.scaleY, rect.width, rect.height)  // 1, 1, 200, 200