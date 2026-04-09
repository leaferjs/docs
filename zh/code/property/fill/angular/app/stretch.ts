// #角度渐变填充 [拉伸渐变 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:6]
        type: "angular", // 从中心 -> 右下角 呈 45 度, 且拉伸比例为 0.1 绘制的渐变。
        stretch: 0.1,
        to: 'bottom-right',
        stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 0.3, color: '#FEB027' }, { offset: 0.7, color: '#79CB4D' }, { offset: 1, color: '#FF4B4B' }]
    }
})

app.tree.add(rect)