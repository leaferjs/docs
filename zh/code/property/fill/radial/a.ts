// #径向渐变填充 [默认方向 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:4]
        type: 'radial', // 从中心 -> 底部居中垂直绘制的渐变
        stops: [{ offset: 0.2, color: '#FF4B4B' }, { offset: 1, color: '#FEB027' }]
    },
})

leafer.add(rect)