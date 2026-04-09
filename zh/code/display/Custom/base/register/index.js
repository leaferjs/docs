import { Rect } from '@leafer-ui/core' // 引入跨平台核心包


class Custom extends Rect {   // [!code hl:7]

    get __tag() { return 'Custom' } // 2. 定义全局唯一的 tag 名称

}

Custom.registerUI() // 1. 注册元素


// 使用自定义元素
import { Leafer, UI  } from 'leafer-ui'

const leafer = new Leafer({ view: window })
const custom = new Custom({ width: 100, height: 200, fill:'blue', draggable: true })

leafer.add(custom)

const json = custom.toJSON()
console.log(json) // 导出json {tag: 'Custom', width: 200, height: 50, fill: 'blue', draggable: true }

json.y = 300
leafer.add(UI.one(json)) // 通过json创建自定义元素