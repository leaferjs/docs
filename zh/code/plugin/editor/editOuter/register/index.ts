import { EditTool, registerEditTool } from '@leafer-in/editor'


@registerEditTool()  // 1. 注册编辑工具  // [!code hl:6]
export class CustomEditTool extends EditTool {

    public get tag() { return 'CustomEditTool' } // 2. 定义全局唯一的 tag 名称

}