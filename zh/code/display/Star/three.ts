// #创建 Star [绘制车标 (Leafer)]
import { Leafer, Star } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const star = new Star({  // [!code hl:7]
    width: 100,
    height: 100,
    corners: 3,
    innerRadius: 0.15,
    fill: '#32cd79'
})

leafer.add(star)