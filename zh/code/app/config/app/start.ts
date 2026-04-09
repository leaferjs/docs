// #应用与引擎配置 - 手动启动应用 [App]
import { App } from 'leafer-ui'

const app = new App({
    view: window,
    tree: {},
    start: false // [!code hl]
})

// async create leafs ...

app.start() 