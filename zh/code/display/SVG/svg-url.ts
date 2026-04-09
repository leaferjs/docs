// #Image 加载 SVG [使用url]
import { Leafer, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({  // [!code hl:3]
    url: './resize.svg',
    draggable: true
})

leafer.add(image)