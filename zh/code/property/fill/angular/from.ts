// #角度渐变填充 [控制方向 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: 'angular', // 从左上角 -> 中心呈 45 度绘制的渐变
        from: { type: 'percent', x: 0.3, y: 0.3 },
        to: 'center',
        stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 0.5, color: '#FEB027' }, { offset: 1, color: '#FF4B4B' }]
    },
})

leafer.add(rect)