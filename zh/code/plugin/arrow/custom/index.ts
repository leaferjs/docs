// #箭头样式 [自定义箭头样式]
import { Leafer, path } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow' // 导入箭头插件 // [!code hl]


// 注册自定义箭头样式 // [!code hl:12] 
Arrow.registerArrow('custom-arrow', {
    // 按照线宽为 1 自定义，箭头末端为（0，0），内部会自动处理缩放、旋转角度
    connect: { x: -0.5 }, // 箭头与线条的连接点位置
    offset: {
        x: -0.71, // 偏移距离（x轴）
        bevelJoin: 0.36, // strokeJoin 为 bevel 时增加的偏移距离（x轴）
        roundJoin: 0.22 // strokeJoin 为 round 时增加的偏移距离（x轴）
    },
    // 路径数据，用线条绘制、拼凑出箭头形状（没有fill)，只用关心箭头从左往右的水平样式，仅支持 M、L、C、Q、O 绘图命令
    path: path().moveTo(-5, -5).lineTo(0, 0).lineTo(-5, 3).path, // = [1, -5, -3, 2, 0, 0, 2, -5, 3] 
    // fill: true // v2.0.7 开始支持启用fill
})


const leafer = new Leafer({ view: window })

const arrow = new Arrow({
    y: 50,
    strokeWidth: 5,
    stroke: '#32cd79',
    endArrow: 'custom-arrow' // 使用自定义箭头 // [!code hl]
})

leafer.add(arrow)