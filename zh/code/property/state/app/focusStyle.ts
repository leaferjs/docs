// #聚焦状态 (App)
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
    focusStyle: { // [!code hl:3] // 聚焦样式
        stroke: '#FEB027'
    }
})

app.tree.add(rect)

setTimeout(() => {

    rect.focus()  // [!code hl:1] // 设置聚焦状态 

    setTimeout(() => { rect.focus(false) }, 2000)

}, 1000)
