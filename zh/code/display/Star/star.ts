// #创建 Star [绘制五角星 (Leafer)]
import { Leafer, Star } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const star = new Star({  // [!code hl:6]
    width: 100,
    height: 100,
    corners: 5,
    fill: '#32cd79'
})

leafer.add(star)