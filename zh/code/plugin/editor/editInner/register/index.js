import { InnerEditor } from '@leafer-in/editor'


export  class CustomEditor extends InnerEditor {  // [!code hl:7]

     get tag() { return 'CustomEditor' } // 2. 定义全局唯一的 tag 名称

}

CustomEditor.registerInnerEditor() // 1. 注册内部编辑器 