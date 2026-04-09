// #交互状态 [按钮效果 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: 'rgba(50,205,121, 0.7)',
    cornerRadius: 30,
    hoverStyle: { fill: 'rgba(50,205,121, 0.8)' }, // [!code hl:2]
    pressStyle: { fill: 'rgba(50,205,121, 1)' },
    cursor: 'pointer'
})

app.tree.add(rect)