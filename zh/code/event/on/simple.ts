// #监听事件 [简洁模式]
import { IEventListenerId } from '@leafer/interface'
import { UI, PointerEvent } from 'leafer-ui'

export class Simple extends UI {

    events: IEventListenerId[]

    listen() { // [!code hl:10]
        this.events = [
            this.on_(PointerEvent.ENTER, this.enter, this),
            this.on_(PointerEvent.LEAVE, this.leave, this)
        ]
    }

    cancel(): void {
        this.off_(this.events)
    }

    enter() { }
    leave() { }

}