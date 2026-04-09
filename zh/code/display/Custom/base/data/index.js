import { Rect, RectData } from '@leafer-ui/core' // 引入跨平台核心包


export class Custom extends Rect {
    get __tag() { return 'Custom' }
}

Custom.registerUI()

// 1. 定义数据处理类 // [!code hl:7]
export class CustomData extends RectData {
    // 元素数据类，负责元素的数据处理， 没有特殊处理逻辑的情况，定义一个空类就行
}

 // 2. 注册数据处理类，防止污染被继承元素的数据
 Custom.registerData(CustomData)


 // 使用自定义元素
 import { Leafer } from 'leafer-ui'
 
const leafer = new Leafer({ view: window })
const custom = new Custom({ width: 100, height: 200, fill: 'blue', draggable: true })

leafer.add(custom)

console.log(custom.__ instanceof CustomData) // true, 可以检查一下类型是否生效
console.log(custom.toJSON()) // 导出json {tag: 'Custom', width: 200, height: 50, fill: 'blue', draggable: true }
