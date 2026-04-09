// #创建Image [图片占位符 (App)]
import { App, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const image = new Image({
    url: '/image/leafer-error.jpg',
    width: 110,
    height: 80,
    draggable: true,
    placeholderColor: 'rgba(120,120,120,0.2)' // 设置图片占位符的背景颜色 // [!code hl] 
})

app.tree.add(image)


setTimeout(() => {

    image.url = '/image/leafer.jpg' // 变为正确的图片

}, 1000)