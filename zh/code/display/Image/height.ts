// #创建Image [固定高度，自适应宽度 (Leafer)]
import { Leafer, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({  // [!code hl:5]
    url: '/image/leafer.jpg',
    height: 50,
    draggable: true
})

leafer.add(image)