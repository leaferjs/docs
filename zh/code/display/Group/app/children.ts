// #创建 Group [通过 children 属性添加 (App)]
import { App, Group, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 200,
    height: 200,
    fill: '#32cd79',
    editable: true
})

const ellipse = new Ellipse({
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: "white",
    editable: true
})

const group = new Group({ // [!code hl:7]
    x: 100,
    y: 100,
    children: [rect, ellipse],
    hitChildren: false, // 阻止直接选择子元素（防止父子选择冲突，可双击进入组内选择子元素）
    editable: true
})

app.tree.add(group)