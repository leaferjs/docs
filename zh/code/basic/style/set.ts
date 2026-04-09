// #修改样式 [简洁修改]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    stroke: '#32cd79',
    strokeWidth: 2,
    dashPattern: [6, 6] // 绘制虚线
})

leafer.add(rect)

// #region main
// 简洁修改
rect.set({
    stroke: 'blue',
    strokeWidth: 4,
})
// #endregion main