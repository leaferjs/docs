// #创建固定宽高的 Leafer [canvas]
import { Leafer, Rect } from 'leafer-ui'

const canvas = document.createElement('canvas')
document.body.appendChild(canvas)

const leafer = new Leafer({
    view: canvas, // view 参数支持设置 canvas 标签对象
    width: 600, // 不能设置为 0， 否则会变成自动布局
    height: 600,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))