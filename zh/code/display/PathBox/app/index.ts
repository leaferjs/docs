// #创建 PathBox [标准创建 (App)]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { PathBox } from '@leafer-in/box' // 导入box插件

const app = new App({ view: window, editor: {} })

const box = new PathBox({
    path: 'X 0 0 100 100 30 P 50 50 25', // [!code hl:2]
    windingRule: 'evenodd',
    fill: '#FF4B4B',
    hitChildren: false, // 阻止直接选择子元素（防止父子选择冲突，可双击进入组内选择子元素）
    editable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    editable: true
})

app.tree.add(box)
box.add(circle)
