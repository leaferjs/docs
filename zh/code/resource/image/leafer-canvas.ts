// #图片 url [跨平台 LeaferCanvas 对象转 url] 
import { Leafer, Image, LeaferCanvas, Platform, Resource } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Platform.origin.loadImage('/image/leafer.jpg').then((img) => {

    const leaferCanvas = new LeaferCanvas({ width: img.width, height: img.height }) // LeaferCanvas 跨平台画布 // [!code hl:6]
    leaferCanvas.drawImage(img, 0, 0)

    const { url } = Resource.setImage('leafer://test3.jpg', leaferCanvas) // LeaferCanvas 转为 自定义资源符

    leafer.add(new Image({ url })) // url = leafer://test3.jpg

})