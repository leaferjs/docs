// #光标样式 [设置光标 (App)]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({
    width: 100,
    height: 100,
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90, 90, 90, 10, 90],
    curve: true,
    fill: '#32cd79',
    cursor: 'no-drop' // [!code hl]
})

app.tree.add(polygon)