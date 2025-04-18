<script setup>
import Case from '/component/Case.vue'
</script>

# 导出元素

将元素导出为图片、JSON。

::: tip 注意事项
需安装 [导出元素插件](/plugin/in/export/index.md) 才能使用，或直接安装 [leafer-editor](/guide/install/editor/start.md)、node 版（已集成导出元素插件）。
:::

### 导出元素为图片

<<< @/code/property/export/file.ts

### 导出高清图

<<< @/code/property/export/pixelRatio.ts

### 导出 Base64 编码数据

<<< @/code/property/export/string.ts

### 同步导出 Base64 编码数据

<<< @/code/property/syncExport/string.ts

### 导出二进制数据

<<< @/code/property/export/blob.ts

### 导出时绘制水印

<<< @/code/property/export/onCanvas.ts

### 导出整个画布

将当前应用画布进行截图导出。

<<< @/code/property/export/screenshot.ts

### 导出 JSON

<<< @/code/property/json/export.ts

## 了解元素导出方法

| 名称                                                                     | 描述                                                                                                            |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| 路径                                                                     |                                                                                                                 |
| [getPath()](/reference/UI/getPath.md)                                    | 获取元素的数字路径（Canvas [绘图命令](/reference/interface/ui/PathData.md#canvas-命令)）                        |
| [getPathString()](/reference/UI/getPathString.md)                        | 获取元素的字符串路径（Canvas [绘图命令](/reference/interface/ui/PathData.md#canvas-命令)，包含非 SVG 绘图命令） |
| 导出                                                                     |                                                                                                                 |
| [export()](/reference/UI/export.md)                                      | 异步导出元素为图片、json、画布，支持截图、切片，可下载，需安装 [导出插件](/plugin/in/export/index.md)           |
| [syncExport()](/reference/UI/export.md#syncexport)                       | 同步导出元素为图片、json、画布，支持截图、切片，可下载，需安装 [导出插件](/plugin/in/export/index.md)           |
| [toJSON()](/reference/UI/json.md)                                        | 导出 JSON 对象                                                                                                  |
| [toString()](/reference/UI/json.md#tostring-options-ijsonoptions-string) | 导出 JSON 字符串                                                                                                |

## 恭喜 🎉

你已完成基础知识的学习，接下来带你了解几个 **好玩的插件**，放松一下～

## 下一步

### [动画功能](/guide/plugin/animate.md)

<br/>

### 在前端环境中使用

[Vue](/guide/framework/vue/index.md)

[React](/guide/framework/react/index.md)

### 在服务端渲染中使用

[Nuxt.js](/guide/framework/nuxt/index.md)

[VitePress](/guide/framework/vitepress/index.md)

[Next.js](/guide/framework/next/index.md)

### 组件式开发（社区提供）

[leafer-vue](https://leafer-vue.netlify.app/)
