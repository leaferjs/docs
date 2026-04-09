// #禁用状态  (Leafer)
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: 'rgba(50,205,121, 1)',
    cornerRadius: 30,
    disabledStyle: { // [!code hl:3] // 禁用样式
        fill: 'rgba(50,205,121, 0.5)'
    }
})

leafer.add(rect)

setTimeout(() => {

    rect.disabled = true  // [!code hl:1] // 设置禁用状态

    setTimeout(() => { rect.disabled = false }, 2000)

}, 1000)
