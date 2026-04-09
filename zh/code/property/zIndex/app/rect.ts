// #调整元素在父元素中的层叠顺序 (App)
import { App, Group, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true
})

const ellipse = new Ellipse({
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: "#FEB027"
})

app.tree.add(new Group({ children: [rect, ellipse] }))

setTimeout(() => {

    // 调整矩形的显示顺序
    rect.zIndex = 1 // [!code hl]

}, 1000)