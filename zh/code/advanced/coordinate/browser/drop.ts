// #拖拽创建图形 [添加到 tree]
import { App, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

// 创建可拖拽的 dom 图形（圆形、矩形）
document.body.innerHTML = `
<div id="circle" draggable="true" style="width: 50px; height: 50px; border-radius: 25px; background-color: #32cd79; cursor: move; display: inline-block" ></div>
<div id="rect" draggable="true" style="width: 50px; height: 50px; background-color: #32cd79; cursor: move; display: inline-block" ></div>
<div id="leafer" style="position: absolute; top: 70px; right: 0; bottom: 0; left: 0;"></div>
`

// 创建应用
const app = new App({ view: 'leafer', fill: '#333', editor: {} })

app.tree.add({ tag: 'Text', x: 100, y: 100, text: '可拖拽上方图形到这里', fill: '#999', fontSize: 16 })


// 设置拖拽数据
document.getElementById('rect').addEventListener('dragstart', function (e) {
    e.dataTransfer.setData("type", 'rect')
})

document.getElementById('circle').addEventListener('dragstart', function (e) {
    e.dataTransfer.setData("type", 'circle')
})


// 让画布可以接收拖拽内容
document.getElementById('leafer').addEventListener('dragover', function (e) {
    e.preventDefault()
})

// 拖拽释放，创建相应图形
document.getElementById('leafer').addEventListener('drop', function (e) {
    const type = e.dataTransfer.getData("type")
    const point = app.getPagePointByClient(e) // 浏览器原生事件的 client 坐标 转 应用的 page 坐标 // [!code hl:6] 
    if (type === 'rect') {
        app.tree.add(Rect.one({ fill: '#32cd79', editable: true }, point.x, point.y))
    } else if (type === 'circle') {
        app.tree.add(Ellipse.one({ fill: '#32cd79', editable: true }, point.x, point.y))
    }
})
