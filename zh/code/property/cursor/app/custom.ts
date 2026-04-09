// #光标样式 [覆盖系统光标 (App)]
import { Cursor } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

Cursor.set('pointer', { url: 'https://leaferjs.com/image/cursor.svg' }) // 替换pointer光标

Cursor.set('pointer_custom', { url: 'https://leaferjs.com/image/cursor.svg' }) // 注册自定义光标名