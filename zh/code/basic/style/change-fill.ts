// #修改样式 [修改对象]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
    }
})

leafer.add(rect)

// 修改对象
setTimeout(() => {
    // 元素只能检测到 第一层级属性 的 setter 变化
    // 需要给 fill 再次赋值， 单独修改 rect.fill.url = url 不会渲染更新
    rect.fill = {
        type: 'image',
        url: '/image/arrows.png',
    }
}, 1000)