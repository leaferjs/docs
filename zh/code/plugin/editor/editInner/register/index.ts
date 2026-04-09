import { InnerEditor, registerInnerEditor } from '@leafer-in/editor'


@registerInnerEditor()  // 1. 注册内部编辑器  // [!code hl:6]
export class CustomEditor extends InnerEditor {

    public get tag() { return 'CustomEditor' } // 2. 定义全局唯一的 tag 名称

}