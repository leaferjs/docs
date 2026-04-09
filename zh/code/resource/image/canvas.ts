// #图片 url [原始 canvas 对象转 url]
import { Leafer, Image, Platform, Resource } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Platform.origin.loadImage('/image/leafer.jpg').then((img) => {

    const canvas = document.createElement('canvas') // 原始画布 // [!code hl:8]
    canvas.width = img.width
    canvas.height = img.height
    canvas.getContext('2d').drawImage(img, 0, 0)

    const { url } = Resource.setImage('leafer://test2.jpg', canvas) // 原始canvas 对象 转为 自定义资源符

    leafer.add(new Image({ url })) // url = leafer://test2.jpg

})