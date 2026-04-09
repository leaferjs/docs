// #应用与引擎配置 - design 视口类型 [实现原理]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    // 以下配置 = tree: { type: 'design' }, // [!code hl:10]
    tree: { type: 'viewport' }, // 添加基础视口
    zoom: {
        min: 0.01, // 视图缩放范围
        max: 256
    },
    move: {
        holdSpaceKey: true,  // 按住空白键拖拽可平移视图
        holdMiddleKey: true, // 按住滚轮中键拖拽可平移视图
    }
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100, 200, 200))