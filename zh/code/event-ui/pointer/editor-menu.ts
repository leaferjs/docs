// #图形编辑器 [右键菜单]
import { App, Rect, PointerEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {}
})

app.tree.add(Rect.one({ name: 'rect1', editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({ name: 'rect2', editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))

app.on(PointerEvent.MENU, (e: PointerEvent) => {  // [!code hl:19]

    if (app.editor.single) {

        // 单选元素 - 右键菜单
        const { element } = app.editor
        showMenu(element.name, e.origin.x, e.origin.y)

    } else if (app.editor.multiple) {

        // 多选元素 - 右键菜单
        showMenu('多个元素', e.origin.x, e.origin.y)

    } else {

        showMenu('没有选中', e.origin.x, e.origin.y)

    }
})

// 模拟显示菜单
function showMenu(name: string, x: number, y: number) {
    const div = document.createElement('div')
    div.setAttribute('style', `position:absolute; left:${x}px; top:${y}px; width:100px; height:150px; background-color:#e3e3e3; border-radius:10px; font-size: 14px;`)
    div.innerHTML = `<div style="padding:5px 10px;border-bottom: 1px solid #999">显示菜单</div><div style="padding:5px 10px;border-bottom: 1px solid #999">${name}</div>`
    document.body.appendChild(div)
    window.addEventListener('pointerdown', () => div.remove())
}