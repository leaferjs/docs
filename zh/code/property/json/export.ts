// #导出 JSON (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true
})

leafer.add(rect)

const json = leafer.toJSON() // [!code hl:3]

console.log(json) // {"tag":"Leafer","width":1273,"height":877,"pixelRatio":2,"hittable":true,"children":[{"tag":"Rect","x":100,"y":100,"width":100,"height":100,"fill":"#32cd79","draggable":true}]}