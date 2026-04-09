// #创建Image [使用默认宽高 (Leafer)]
import { Leafer, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({  // [!code hl:4]
    url: '/image/leafer.jpg',
    draggable: true
})

leafer.add(image)