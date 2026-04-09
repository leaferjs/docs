// #图片 url [原始图片对象转 url]  
import { Leafer, Image, Platform, Resource } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Platform.origin.loadImage('/image/leafer.jpg').then((img) => { // 加载原始图片对象（跨平台） [!code hl:7]

    const { url } = Resource.setImage('leafer://test1.jpg', img) // 原始图片对象 转为 自定义资源符

    leafer.add(new Image({ url })) // url = leafer://test1.jpg

})