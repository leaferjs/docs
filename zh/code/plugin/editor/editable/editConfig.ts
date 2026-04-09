// #图形编辑器 [editConfig]
import { Text } from 'leafer-ui'

// 1. 设置类，所有 Text 元素生效，不会导出json（推荐）
Text.setEditConfig({
    editSize: 'scale' // 使用对象
})

Text.setEditConfig(function (text: Text) {
    return {  // 使用函数返回对象，可增加业务逻辑分流
        editSize: text.get('width') ? 'size' : 'scale'
    }
})

// 2. 设置单个元素，不会导出json
const text = new Text({ text: 'hello', editable: true })
Object.defineProperty(text, 'editConfig', {
    get() { return { moveable: false } }
})

// 3. 设置单个元素，支持导出json，会增加内存开销
new Text({
    text: 'hello',
    editable: true,
    editConfig: { moveable: false }
})