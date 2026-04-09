// #创建固定宽高的 Leafer [div]
import { Leafer, Rect } from 'leafer-ui'

const div = document.createElement('div')
document.body.appendChild(div)

const leafer = new Leafer({
    view: div, // view 参数支持设置 div 标签对象
    width: 600, // 不能设置为 0， 否则会变成自动布局
    height: 600,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))