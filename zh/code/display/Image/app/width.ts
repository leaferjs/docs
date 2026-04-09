// #创建Image [固定宽度，自适应高度 (App)]
import { App, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const image = new Image({  // [!code hl:4]
    url: '/image/leafer.jpg',
    width: 50,
    editable: true
})

app.tree.add(image)