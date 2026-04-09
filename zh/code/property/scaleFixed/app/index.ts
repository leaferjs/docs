// #scaleFixed [元素不随画面放大 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({
    scaleFixed: 'zoom-in', // 元素不随画面放大，但会跟随缩小 // [!code hl]
    editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0]
}, 300, 100))

setTimeout(() => {

    app.tree.scale = 2 // 画面放大2倍

}, 1000)