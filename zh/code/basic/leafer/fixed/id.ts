// #创建固定宽高的 Leafer [id]
import { Leafer, Rect } from 'leafer-ui'

const div = document.createElement('div')
div.setAttribute('id', 'leafer-view')
document.body.appendChild(div)


const leafer = new Leafer({
    view: 'leafer-view', // view 参数支持使用id字符串(不用加 # 号)
    width: 600, // 不能设置为 0， 否则会变成自动布局
    height: 600,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))