// #径向渐变填充 [拉伸渐变 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: "radial", // 从中心 -> 右下角 呈 45 度, 且拉伸比例为 0.5 绘制的渐变
        to: 'bottom-right',
        stretch: 0.5,
        stops: [{ offset: 0, color: '#FF4A2C' }, { offset: 1, color: '#FEB027' }]
    }
})

app.tree.add(rect)