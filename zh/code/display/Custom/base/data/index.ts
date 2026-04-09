// #自定义元素 [定义数据]
import { Rect, RectData, registerUI, dataProcessor } from '@leafer-ui/core' // 引入跨平台核心包
import { IRectInputData, IRectData } from '@leafer-ui/interface'


// 1. 定义数据接口  // [!code hl:9]

export interface ICustomInputData extends IRectInputData {
    // 输入数据接口，需定义为可选项，比如: width?: number | string
}

export interface ICustomData extends IRectData {
    // 数据处理（计算数据）接口, 需定义为可选项，比如: width?: number
}

// 2. 定义数据处理类 // [!code hl:4]
export class CustomData extends RectData implements ICustomData {
    // 元素数据类，负责元素的数据处理， 没有特殊处理逻辑的情况，定义一个空类就行
}


@registerUI()
export class Custom extends Rect {

    public get __tag() { return 'Custom' }

    // 3. 注册数据处理类，防止污染被继承元素的数据 // [!code hl:3]
    @dataProcessor(CustomData)
    declare public __: ICustomData


    // 4. 定义初始化输入数据 // [!code hl:5]
    constructor(data: ICustomInputData) {
        super(data)
        // ...
    }

}


// 使用自定义元素
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })
const custom = new Custom({ width: 100, height: 200, fill: 'blue', draggable: true })

leafer.add(custom)

console.log(custom.toJSON()) // 导出json {tag: 'Custom', width: 200, height: 50, fill: 'blue', draggable: true }
