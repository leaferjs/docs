// #创建 Canvas [使用 context 绘制 (Leafer)]
import { Leafer, Canvas } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const canvas = new Canvas({ width: 800, height: 600 }) // [!code hl:15]
const { context } = canvas

context.fillStyle = '#FF4B4B'
context.beginPath()
context.roundRect(0, 0, 100, 100, 30)
context.arc(50, 50, 25, 0, Math.PI * 2)
context.fill('evenodd')

context.fillStyle = '#FEB027'
context.beginPath()
context.arc(50, 50, 20, 0, Math.PI * 2)
context.fill()

canvas.paint() // 更新渲染

leafer.add(canvas)
