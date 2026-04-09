// #调整 Group 大小，不使用 scale 属性 (App)
import { App, Group, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/resize' // 导入 resize 插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const group = new Group({
    children: [
        new Rect({
            width: 100,
            height: 100,
            fill: '#32cd79',
            draggable: true
        }),
        new Ellipse({
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            innerRadius: 0.5,
            fill: "#FEB027"
        })
    ]
})

app.tree.add(group)

setTimeout(() => {

    // resize group
    group.resizeWidth(200)  // [!code hl:2]
    group.resizeHeight(200)

}, 1000)

