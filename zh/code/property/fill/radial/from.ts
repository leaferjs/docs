// #径向渐变填充 [控制方向 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: 'radial', // 从左上角 -> 右下角呈 45 度绘制的渐变
        from: { type: 'percent', x: 0.2, y: 0.2 },
        to: { type: 'percent', x: 0.8, y: 0.8 },
        stops: ['#FF4B4B', '#FEB027']
    },
})

leafer.add(rect)