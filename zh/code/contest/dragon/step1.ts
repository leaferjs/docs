import { Leafer, DragEvent, Line, IPointData } from 'leafer-ui'


const leafer = new Leafer({ view: window })


const points: IPointData[] = []  // 收集绘画坐标

const line = new Line({ stroke: 'black', strokeWidth: 10, points })
leafer.add(line)

// 绘制一条首尾相连的路径用来做飞行路径
leafer.on([DragEvent.START, DragEvent.DRAG], (e: DragEvent) => {
    const point = e.getInnerPoint(line)
    points.push(point)

    line.points = points
})

leafer.on(DragEvent.END, () => {
    console.log(JSON.stringify(points)) // 打印坐标到控制台备用
})