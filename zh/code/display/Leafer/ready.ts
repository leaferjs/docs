import { Leafer, LeaferEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

leafer.on(LeaferEvent.READY, function () {
    // 引擎准备就绪
})

leafer.on(LeaferEvent.VIEW_READY, function () {
    // 视图准备就绪
})