// #自定义元素 [继承 Rect]
import { registerUI, dataProcessor, Rect, RectData, dataType } from '@leafer-ui/core' // 引入跨平台核心包
import { IRectInputData, IRectData } from '@leafer-ui/interface'


// 定义数据

export interface ICustomRectInputData extends IRectInputData {
    top?: number
}

export interface ICustomRectData extends IRectData {
    top?: number
}

export class CustomRectData extends RectData implements ICustomRectData {

}

// 定义类

@registerUI()
class CustomRect extends Rect {

    public get __tag() { return 'CustomRect' }

    @dataProcessor(CustomRectData)
    declare public __: ICustomRectData

    @dataType(0)
    declare public top: string // 增加自定义属性， 注意必须加上 declare 关键词

    constructor(data: ICustomRectInputData) {
        super(data)
        // ...
    }

}


// 使用自定义元素
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })
const customRect = new CustomRect({ top: 50, y: 100, width: 200, height: 50, fill: 'blue', draggable: true })

leafer.add(customRect)