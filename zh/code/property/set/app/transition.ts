// #通过 set() 修改属性 [有动画过渡 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/animate' // 导入动画插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' })

app.tree.add(rect)

setTimeout(() => {

    // 设置元素的位置
    rect.set({ x: 100, y: 100 }, true) // [!code hl]

}, 1000)