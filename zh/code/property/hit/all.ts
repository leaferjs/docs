// #交互功能 [不可见的 fill 也能响应交互 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    stroke: {
        type: 'linear',
        stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 1, color: '#FEB027' }]
    },
    strokeWidth: 10,
    draggable: true,
    hitFill: 'all' // [!code hl] // 不可见的 fill 也能响应交互
})

leafer.add(rect)