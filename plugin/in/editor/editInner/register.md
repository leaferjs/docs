# 注册内部编辑器

自定义内部编辑器的第 1 步是： **注册内部编辑器**。

内部编辑器一般用来编辑文本、路径等内部细节，通过双击元素打开。

## 注意事项

TypeScript 环境需在 `tsconfig.json` 配置文件中开启装饰器功能支持：

::: code-group

```json [tsconfig.json]
{
  "compilerOptions": {
    "experimentalDecorators": true // 开启装饰器功能
  }
}
```

:::

## 注册步骤

### 1. 注册内部编辑器

通过 `registerInnerEditor()` 方法内部编辑器。

实现原理：将编辑工具的 tag 属性作为键值存放内部编辑器类。

### 2. 定义标签名

定义全局唯一的 [tag](/reference/UI/tag.md) 名称。

加载内部编辑器时，通过 tag 属性查找对应内部编辑器类进行实例化。

## 继承

### [InnerEditor](../InnerEditor.md)

## 示例

::: code-group

<<< @/code/plugin/editor/editInner/register/index.ts

<<< @/code/plugin/editor/editInner/register/index.js
:::

## 下一步

### [自定义控制点](/plugin/in/editor/editInner/load.md)
