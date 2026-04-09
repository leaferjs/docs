
import { Leafer, Line, Platform, Path } from 'leafer-game'


// 导入龙的路径部件 及 之前采集的飞行路径
import { points, headPath, headWithEyePath, bodyPath, clawLeftPath, clawRightPath, tailPath } from './dragon'


const leafer = new Leafer({ view: window })

// 加载龙的飞行路径
const line = new Line({ motionPath: true, points }) // 增加 motionPath: true， 设为运动路径
leafer.add(line)


// --- 第一部分 ---

// 绘制龙

let fill = 'black' // 填充色

/// 1. 头
const head = new Path({
    path: headPath,
    fill,
    around: 'center',
    cursor: 'pointer', // 增加按钮交互效果
    hoverStyle: { scale: 1.2 },
    pressStyle: { scale: 3, transition: 0.5 }
})
leafer.add(head)

// 2. 爪子
const claws = [
    new Path({ path: clawLeftPath, fill, around: 'center' }),
    new Path({ path: clawRightPath, fill, around: 'center' }),
    new Path({ path: clawLeftPath, fill, around: 'center' }),
    new Path({ path: clawRightPath, fill, around: 'center' }),
]
leafer.add(claws)

// 3. 身体，多个活动关节
const body: Path[] = []
for (let i = 0; i < 36; i++) {
    let scale = 1
    if (i < 10) scale -= (10 - i) / 30 // 靠近头部收窄
    else if (i > 16) scale -= (i - 16) / 30  // 尾部收窄
    body.push(new Path({ path: bodyPath, fill, scale, around: 'center' }))
}
leafer.add(body)

// 4. 尾巴
const tail = new Path({ path: tailPath, fill, around: 'center' })
leafer.add(tail)



// --- 第二部分 ---

// 飞行动画及交互

// 1. 准备飞行数据
const total = line.getMotionTotal() // 飞行的总里程（运动路径的总长度）
let to = 700 // 飞往的位置（距离起点）

function getPosition(position: number): number {
    return position < 0 ? total + position : position // 生成有效的定位位置
}

// 2. 飞行到指定位置，并定位龙的部件
function flyTo(to: number) {
    let position = to

    // 定位头部
    head.set(head.getMotionPoint(position)) // 获取运动路径上的点，然后 set({x, y, rotation})
    position -= 15

    // 定位身体
    body.forEach(item => {
        item.set(item.getMotionPoint(getPosition(position)))
        position -= 30 * item.scaleX * 0.75
    })

    // 定位尾巴
    tail.set(tail.getMotionPoint(getPosition(position)))

    // 定位爪子
    const quarter = (position - to) / 4 // 身体长度的 1/4

    position = to + quarter
    claws[0].set(claws[0].getMotionPoint(getPosition(position)))
    claws[1].set(claws[1].getMotionPoint(getPosition(position += 20)))

    position = to + quarter * 3
    claws[2].set(claws[2].getMotionPoint(getPosition(position)))
    claws[3].set(claws[3].getMotionPoint(getPosition(position += 20)))
}


// 3. 循环飞行动画
function animate() {
    to += 8
    if (to > total) to = 0
    flyTo(to)

    Platform.requestRender(animate)
}


// 4.点击头部之后开始飞行动画
head.on('tap', () => {
    head.path = headWithEyePath // 替换带眼睛的龙头路径
    setTimeout(() => {
        animate()
    }, 500)

})


// 设置龙的初始飞行状态
flyTo(to)