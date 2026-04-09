// #创建固定宽高的 Leafer [window]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window, // view 参数支持设置 window 对象
    width: 600, // 不能设置为 0， 否则会变成自动布局
    height: 600,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))