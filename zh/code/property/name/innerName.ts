// #显示矩形元素的 innerName (Leafer)
import { Leafer, Rect, Text } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 30)

leafer.add(rect)

leafer.add(new Text({ text: rect.innerName, fill: '#32cd79' }))  // [!code hl] 
