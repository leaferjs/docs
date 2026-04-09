// #导出 JSON (App)
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true
})

app.tree.add(rect)

const json = app.tree.toJSON() // [!code hl:3]

console.log(json) // {"tag":"Leafer","width":1273,"height":877,"pixelRatio":2,"hittable":true,"children":[{"tag":"Rect","x":100,"y":100,"width":100,"height":100,"fill":"#32cd79","draggable":true}]}