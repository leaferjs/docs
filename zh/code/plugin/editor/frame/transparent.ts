// #图形编辑器 [背景为透明方格的画板]
import { App, Frame, Rect, Platform } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ // [!code hl:5]
    view: window,
    fill: '#333',
    editor: {},  //  配置 editor 会自动创建并添加 app.editor 实例、tree 层、sky 层
})

// 平铺的透明方格
const svg = Platform.toURL(
    `<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="5" height="5" fill="#FFF"/><rect x="5" y="0" width="5" height="5" fill="#CCC"/>
<rect x="0" y="5" width="5" height="5" fill="#CCC"/><rect x="5" y="5" width="5" height="5" fill="#FFF"/>
</svg>`, 'svg',)


app.tree.add(Frame.one({ // 背景为透明方格的画板
    fill: {
        type: 'image',
        url: svg,
        mode: 'repeat',
        scaleFixed: 'zoom-in' // true // 固定平铺图比例，不随画布缩放  //[!code hl]
    },
    shadow: {
        x: 0,
        y: 3,
        blur: 15,
        color: '#0009',
        scaleFixed: 'zoom-in' // 固定阴影比例，不随画布放大 //[!code hl]
    },
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))