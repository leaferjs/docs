// #修改数据 [使用 JSON (Leafer)]
import { Group, Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group()

leafer.add(group)

const json = { "x": 20, "y": 20, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 200, "height": 200, "fill": "#32cd79", "draggable": true }] } // [!code hl:3]

group.set(json)

