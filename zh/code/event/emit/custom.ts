// #派发自定义事件
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

rect.on('file.save', (data) => { // [!code hl:5]
    console.log(data.text)
})

rect.emit('file.save', { text: '这是一个自定义的事件' })