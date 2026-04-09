// #径向渐变填充 [控制方向 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: 'radial', // 从左上角 -> 右下角呈 45 度绘制的渐变
        from: { type: 'percent', x: 0.2, y: 0.2 },
        to: { type: 'percent', x: 0.8, y: 0.8 },
        stops: ['#FF4B4B', '#FEB027']
    },
})

app.tree.add(rect)