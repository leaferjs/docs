import { Leafer, Group, Rect, DragEvent, Pen } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group()
const rect = new Rect({ fill: 'green', width: 400, height: 400 })
const pen = new Pen({ eraser: true })
pen.setStyle({ stroke: 'red', strokeWidth: 20, width: 20, strokeCap: "round", strokeJoin: "round" })

group.add(rect)
group.add(pen)
leafer.add(group)

let x: number
let y: number

group.on('drag', (e: DragEvent) => {
    if (x === undefined) {
        pen.moveTo(e.x, e.y)
        x = e.x
        y = e.y
    }
    x += e.moveX
    y += e.moveY
    pen.lineTo(x, y)
})

group.on('pointer.up', () => {
    x = undefined
})
