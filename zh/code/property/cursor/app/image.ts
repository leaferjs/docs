// #光标样式 [设置图片光标 (App)]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({
    width: 100,
    height: 100,
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90, 100, 90, 0, 90],
    curve: true,
    fill: '#32cd79',
    cursor: { url: 'https://leaferjs.com/image/cursor.svg', x: 2, y: 2 } // [!code hl]
})

app.tree.add(polygon)