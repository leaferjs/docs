// #等待图片加载完，再添加到引擎中
import { Leafer, Image, Resource } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const url = '/image/leafer.jpg'

Resource.loadImage(url).then(() => { // [!code hl:5]

    leafer.add(new Image({ url }))

})