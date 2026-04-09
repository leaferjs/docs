// #创建Image [使用默认宽高 (App)]
import { App, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const image = new Image({  // [!code hl:4]
    url: '/image/leafer.jpg',
    editable: true
})

app.tree.add(image)