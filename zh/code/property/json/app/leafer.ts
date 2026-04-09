// #Leafer 导入 JSON (App)
import { App } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const json = { "tag": "Leafer", "width": 1273, "height": 877, "pixelRatio": 2, "hittable": true, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 100, "height": 100, "fill": "#32cd79", "draggable": true }] } // [!code hl:3]

const app = new App({ view: window, editor: {} })
app.tree.set(json)