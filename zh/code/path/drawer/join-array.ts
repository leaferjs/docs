// #生成路径数据 - [在数字路径上继续绘制]
import { Leafer, Path, PathCreator } from 'leafer-ui'

const leafer = new Leafer({ view: window })
leafer.add(new Path({ path: 'X 0 0 100 100 30', fill: { type: 'radial', stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 1, color: '#FEB027' }] } }))

const pathCommandData = [1, 40, 30, 5, 70, 30, 90, 60, 63, 80] // [!code hl:4]

const drawer = new PathCreator(pathCommandData)
drawer.quadraticCurveTo(50, 88, 40, 80).bezierCurveTo(10, 60, 50, 40, 40, 30)

leafer.add(new Path({ path: drawer.path, fill: 'white' }))