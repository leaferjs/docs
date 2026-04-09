// #创建 Path [缠绕路径 (App)]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const path1 = new Path({
    path: 'X 0 0 100 100 30 P 50 50 25', // [!code hl:2]
    windingRule: 'evenodd',
    fill: '#FF4B4B',
    editable: true
})

const path2 = new Path({
    path: 'P 50 50 20',
    fill: '#FEB027',
    editable: true
})

app.tree.add(path1)
app.tree.add(path2)