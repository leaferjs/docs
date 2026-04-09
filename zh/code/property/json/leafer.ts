// #Leafer 导入 JSON (Leafer)
import { Leafer } from 'leafer-ui'

const json = { "tag": "Leafer", "width": 1273, "height": 877, "pixelRatio": 2, "hittable": true, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 100, "height": 100, "fill": "#32cd79", "draggable": true }] } // [!code hl:3]

new Leafer({ view: window }, json)