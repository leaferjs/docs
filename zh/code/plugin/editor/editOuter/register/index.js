import { EditTool, Editor } from '@leafer-in/editor'


export class CustomEditTool extends EditTool {

     get tag() { return 'CustomEditTool' } // 2. 定义全局唯一的 tag 名称

}

CustomEditTool.registerEditTool() // 1. 注册编辑工具  // [!code hl:6]
