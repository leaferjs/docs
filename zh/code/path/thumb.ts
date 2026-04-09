// #绘制路径缩略图 [绘制自由多边形 (App)]
import { App, Leafer, Polygon, Matrix, BoundsEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({
    x: 100,
    y: 100,
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90, 100, 90, 0, 90],
    curve: true,
    fill: '#32cd79',
    editable: true
})

Object.defineProperty(Leafer.prototype, 'view', {
    get() { return this.canvas && this.canvas.view },
    set() { }
})

app.tree.add(polygon)

// 创建小缩略图画布
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
canvas.style.width = '100px', canvas.style.height = '50px'
canvas.width = 100 * devicePixelRatio, canvas.height = 50 * devicePixelRatio
document.body.appendChild(canvas)

// 更新缩略图
function updateThumb() {
    // 重置
    context.resetTransform()
    context.clearRect(0, 0, 200, 100)

    // 偏移、缩放矩阵
    const matrix = new Matrix()
    // const {boxBounds} = polygon // 取元素的包围盒，计算出需要偏移的距离和缩放大小，赋值给下面的矩阵方法
    matrix.translate(10, 10)
    matrix.scale(0.5)

    const { a, b, c, d, e, f } = matrix
    context.setTransform(a, b, c, d, e, f)

    // 绘制路径
    context.strokeStyle = 'gray'
    context.lineWidth = devicePixelRatio * 2
    polygon.__drawRenderPath(context as any)
    context.stroke()
}

// 元素大小变化时进行更新
polygon.on(BoundsEvent.INNER, () => {
    updateThumb()
})

app.tree.once('layout.end', () => {
    updateThumb()
})



