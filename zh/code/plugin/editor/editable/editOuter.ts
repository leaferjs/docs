// #图形编辑器 [editOuter]
import { Text } from 'leafer-ui'

// 1. 设置类，所有 Text 元素生效（推荐）
Text.setEditOuter('TextEditTool')

Text.setEditOuter(function (text: Text) {
    // 使用函数返回名称，可增加业务逻辑分流
    return text.get('width') ? 'EditTool' : 'TextEditTool'
})

// 2. 设置单个元素，不会导出json
const text = new Text({ text: 'hello', editable: true })
Object.defineProperty(text, 'editOuter', {
    get() { return 'TextEditTool' }
})

// 2. 设置单个元素，支持导出json，会增加内存开销
new Text({
    text: 'hello',
    editable: true,
    editOuter: 'TextEditTool'
})