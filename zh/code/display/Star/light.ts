// #创建 Star [绘制星光 (Leafer)]
import { Leafer, Star } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const star = new Star({  // [!code hl:7]
    width: 100,
    height: 100,
    corners: 4,
    innerRadius: 0.1,
    fill: '#32cd79'
})

leafer.add(star)