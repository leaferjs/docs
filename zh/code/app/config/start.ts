// #应用与引擎配置 - 手动启动应用 [Leafer]
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    start: false // [!code hl]
})

// async create leafs ...

leafer.start() 