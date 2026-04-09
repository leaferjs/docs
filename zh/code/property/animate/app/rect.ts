// #动画方法 [摇摆动画 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/animate' // 导入动画插件 // [!code hl] 

const app = new App({ view: window, editor: {} })

const rect = new Rect({ y: 100, cornerRadius: 50, fill: '#32cd79' })

app.tree.add(rect)

rect.animate(  // [!code hl:7]
    { x: 500, cornerRadius: 0 }, // style keyframe
    {
        duration: 1,
        swing: true // 摇摆循环播放
    } // options
)