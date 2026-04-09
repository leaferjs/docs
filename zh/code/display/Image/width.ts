// #创建Image [固定宽度，自适应高度 (Leafer)]
import { Leafer, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({  // [!code hl:4]
    url: '/image/leafer.jpg',
    width: 50,
    draggable: true
})

leafer.add(image)