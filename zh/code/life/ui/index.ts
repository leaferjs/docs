// #监听元素生命周期事件 [通过 event 对象监听]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79',
    cornerRadius: [50, 80, 0, 80],
    draggable: true,
    event: { // [!code hl:11]
        created() {
            console.log('rect created')
        },
        mounted: () => {
            console.log('mounted, leafer', rect.leafer) // 元素已挂载到 leafer 的树结构上，可以被渲染
        },
        unmounted() {
            console.log('unmounted')
        },
    }
})

leafer.add(rect)