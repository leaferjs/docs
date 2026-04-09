// #描边样式
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Line({
    y: 100,
    stroke: '#32cd79', // [!code hl:8]
    strokeWidth: 5, // 描边的宽度
    strokeScaleFixed: true, // 是否固定线宽（不受视图放大影响）
    strokeAlign: 'center', // 描边的对齐方式 'inside'、'center' 、'outside'
    strokeCap: 'round', // 描边的端点形状 'none' 、'round' 、'square'
    strokeJoin: 'round', // 描边的拐角处理 'miter' 、'bevel' 、'round'
    dashPattern: [15, 15], // 绘制虚线
    dashOffset: 15,	// 虚线描边的起点偏移值
})

leafer.add(rect)