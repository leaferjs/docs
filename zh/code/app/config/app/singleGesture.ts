// #应用与引擎配置 - 锁定单一手势操作 [App]
import { App, Rect, Frame } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    fill: '#333',
    mobile: true, // 适配移动端
    multiTouch: {
        singleGesture: true // 识别并锁定单一手势操作 // [!code hl]
    },
    editor: { moveable: 'gesture', resizeable: 'gesture', rotateable: 'gesture' }  //  编辑元素支持手势操作 
})

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))