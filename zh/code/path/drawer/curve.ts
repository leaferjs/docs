// #生成路径数据 - [创建新路径进行绘制]
import { Leafer, Path, PathCreator } from 'leafer-ui'

const leafer = new Leafer({ view: window })
leafer.add(new Path({ path: 'X 0 0 100 100 30', fill: { type: 'radial', stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 1, color: '#FEB027' }] } }))

const drawer = new PathCreator() // [!code hl:4]
drawer.moveTo(40, 30).bezierCurveTo(70, 30, 90, 60, 63, 80).quadraticCurveTo(50, 88, 40, 80).bezierCurveTo(10, 60, 50, 40, 40, 30)

leafer.add(new Path({ path: drawer.path, fill: 'white' }))