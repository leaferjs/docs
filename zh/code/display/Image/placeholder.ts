// #创建Image [图片占位符 (Leafer)]
import { Leafer, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({
    url: '/image/leafer-error.jpg',
    width: 110,
    height: 80,
    draggable: true,
    placeholderColor: 'rgba(120,120,120,0.2)' // 设置图片占位符的背景颜色 // [!code hl] 
})

leafer.add(image)


setTimeout(() => {

    image.url = '/image/leafer.jpg' // 变为正确的图片

}, 1000)