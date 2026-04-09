// #交互功能 [只有 stroke 能响应交互 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: '#FEB02730',
    stroke: {
        type: "radial",
        stops: [{ offset: 0, color: '#FF4A2C' }, { offset: 1, color: '#FEB027' }]
    },
    strokeWidth: 10,
    draggable: true,
    hitFill: 'none' // [!code hl] // 只有 stroke 能响应交互
})

leafer.add(rect)