// #通过 skewOf() 倾斜元素 [无动画过渡 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

app.tree.add(rect)

setTimeout(() => {

    // 围绕中心继续倾斜X轴 45度
    rect.skewOf('center', 45) // [!code hl]

}, 1000)