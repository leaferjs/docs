// #创建 Path [缠绕路径 (Leafer)]
import { Leafer, Path } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const path1 = new Path({
    path: 'X 0 0 100 100 30 P 50 50 25', // [!code hl:2]
    windingRule: 'evenodd',
    fill: '#FF4B4B'
})

const path2 = new Path({
    path: 'P 50 50 20',
    fill: '#FEB027'
})

leafer.add(path1)
leafer.add(path2)