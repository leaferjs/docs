// #动画样式 [入场和出场动画 (App)]
import { Group, App, Frame } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/animate' // 导入动画插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const page1 = new Frame({
    x: 300,
    y: 100,
    width: 150,
    height: 100,
    fill: '#FEB027',
    animation: { // 入场动画  // [!code hl:8]
        keyframes: [{ opacity: 0, offsetX: -150 }, { opacity: 1, offsetX: 0 }],
        duration: 0.8
    },
    animationOut: { // 出场动画
        style: { opacity: 0, offsetX: 150 },
        duration: 0.8
    }
})

const page2 = page1.clone({ fill: '#32cd79' }) // 克隆 page 并重新设置fill

const group = new Group({ children: [page1] })

app.tree.add(group)

// 切换页面, 自动执行入场、出场动画
setInterval(() => {

    if (page1.parent) {
        group.add(page2)
        page1.remove()
    } else {
        group.add(page1)
        page2.remove()
    }

}, 2000)