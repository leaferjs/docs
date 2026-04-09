// #多个不同类型的填充叠加 [线性渐变填充 + 图案填充 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: [ // [!code hl:11]
        {
            type: 'linear', // 线性渐变填充
            stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 1, color: '#FEB027' }]
        },
        {
            type: 'image', // 图案填充
            url: '/image/leafer.jpg',
            mode: 'cover',
            opacity: 0.2
        }]
})

leafer.add(rect)