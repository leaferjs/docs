// #径向渐变填充 [拉伸渐变 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: "radial", // 从中心 -> 右下角 呈 45 度, 且拉伸比例为 0.5 绘制的渐变
        to: 'bottom-right',
        stretch: 0.5,
        stops: [{ offset: 0, color: '#FF4A2C' }, { offset: 1, color: '#FEB027' }]
    }
})

leafer.add(rect)