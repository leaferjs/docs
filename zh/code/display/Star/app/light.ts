// #创建 Star [绘制星光 (App)]
import { App, Star } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const star = new Star({  // [!code hl:8]
    width: 100,
    height: 100,
    corners: 4,
    innerRadius: 0.1,
    fill: '#32cd79',
    editable: true
})

app.tree.add(star)