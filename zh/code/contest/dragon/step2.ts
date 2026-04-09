import { App, Line, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // 图形编辑插件

// 导入龙的路径部件 及 之前采集的飞行路径
import { points, headPath, bodyPath, clawLeftPath, clawRightPath, tailPath } from './dragon'


const app = new App({
    view: window,
    editor: {} // 会自动创建 editor实例、tree层、sky层
})

// 加载龙的飞行路径
const line = new Line({ points })
app.tree.add(line)


// 开始绘制龙

let fill = 'black' // 填充色

/// 1. 头
const head = new Path({
    path: headPath,
    fill,
    around: 'center'
})
app.tree.add(head)

// 2. 爪子
const claws = [
    new Path({ path: clawLeftPath, fill, around: 'center' }),
    new Path({ path: clawRightPath, fill, around: 'center' }),
    new Path({ path: clawLeftPath, fill, around: 'center' }),
    new Path({ path: clawRightPath, fill, around: 'center' }),
]
app.tree.add(claws)

// 3. 身体，多个活动关节
const body: Path[] = []
for (let i = 0; i < 36; i++) {
    let scale = 1
    if (i < 10) scale -= (10 - i) / 30 // 靠近头部收窄
    else if (i > 16) scale -= (i - 16) / 30  // 尾部收窄
    body.push(new Path({ path: bodyPath, fill, scale, around: 'center' }))
}
app.tree.add(body)

// 4. 尾巴
const tail = new Path({ path: tailPath, fill, around: 'center' })
app.tree.add(tail)