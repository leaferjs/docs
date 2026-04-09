// #交互功能 [只有 stroke 能响应交互 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: '#FEB02730',
    stroke: {
        type: "radial",
        stops: [{ offset: 0, color: '#FF4A2C' }, { offset: 1, color: '#FEB027' }]
    },
    strokeWidth: 10,
    draggable: true,
    hitFill: 'none' // [!code hl] // 只有 stroke 能响应交互
})

app.tree.add(rect)