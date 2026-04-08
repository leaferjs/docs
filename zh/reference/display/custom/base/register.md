# 注册元素

自定义元素的第 1 步是： **注册元素**。

注册成功后可以导入导出 [JSON](/reference/UI/json.md) 。

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

想要做成跨平台元素，需引入 `@leafer-ui/core`（跨平台核心包，用来代替 leafer-ui 包）、`@leafer-ui/interface`（接口） 作为外部依赖。

```ts
import { Rect } from '@leafer-ui/core'

export class CustomRect extends Rect {}
```

## 注册步骤

### 1. 注册元素

通过 `registerUI()` 方法注册元素。

实现原理：将元素的 tag 属性作为键值存放元素类。

### 2. 定义标签名

定义全局唯一的 [tag](/reference/UI/tag.md) 名称。

导入 json 时，通过 tag 属性查找对应元素类进行实例化。

## 示例

::: code-group

<<< @/code/display/Custom/base/register/index.ts

<<< @/code/display/Custom/base/register/index.js
:::

## 下一步

### [注册数据](/reference/display/custom/base/data.md)
