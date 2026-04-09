// #图形编辑器 [创建图形 - 进入绘制模式]
import { App, DragEvent, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)


const app = new App({ view: window, editor: {}, fill: '#333' })

app.tree.add({ tag: 'Text', x: 100, y: 100, text: '2秒后进入绘制模式，按下鼠标拖动可创建矩形，10 秒后再回到正常模式', fill: '#999', fontSize: 16 })


app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 300))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', rotation: 10, cornerRadius: [0, 20, 20, 0] }, 300, 300))

app.editor.select(app.tree.children[2])

setTimeout(() => {

    // 2秒后进入绘制模式 // [!code hl]
    app.mode = 'draw'

    // 创建矩形（拖拽）
    let rect: Rect

    const events = [
        app.on_(DragEvent.START, () => {
            rect = new Rect({ editable: true, fill: '#32cd79' })
            app.tree.add(rect)
        }),

        app.on_(DragEvent.DRAG, (e: DragEvent) => {
            if (rect) rect.set(e.getPageBounds()) // 获取事件在 page 坐标系中绘制形成的包围盒  // [!code hl]
        })]


    setTimeout(() => {

        app.off_(events)

        // 10 秒后回到正常模式 // [!code hl]
        app.mode = 'normal'

    }, 10000)

}, 2000)
