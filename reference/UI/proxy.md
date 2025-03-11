# 响应式数据

让元素在 Vue / React 等前端框架 中支持响应式数据。

修改元素数据 或 响应式数据，都能得到同步更新。

## 关键属性

### proxyData: [`IUIInputData`](/api/interfaces/IUIInputData.md)

getter 响应式数据，用于代理元素数据。

::: tip
注意：访问 proxyData 后会自动创建响应式数据对象 \_\_proxyData，注意合理使用，会增加内存开销。
:::

## 数据层级

目前只支持第一层属性的响应式，如果数据为对象、数组类型的，需要更新为新对象才能生效。

```ts
proxyData.fill.rotation = 30 // 无效

proxyData.fill = proxyData.fill // 无效

proxyData.fill = { ...proxyData.fill, rotation: 30 } // 有效， 已更新为一个新对象
```

## 内部需实现的方法

已提供 Vue3 的 示例 （proxyData.ts），后续会有主流框架的相关插件。

### createProxyData ( ): [`IUIInputData`](/api/interfaces/IUIInputData.md)

根据不同的前端框架创建响应式数据 \_\_proxyData（内部使用）。

### setProxyAttr ( name: `string`, newValue: [`IValue`](/api/modules.md#ivalue) )

设置元素属性时，同步设置代理数据（内部使用）。

### getProxyAttr ( name: `string` ): [`IValue`](/api/modules.md#ivalue)

获取元素属性时，优先返回代理数据（内部使用）。

## 示例

### Vue3 中实现响应式数据

可以看到页面中的数据自动从 100 变为 1，再变为 2，点击数字之后变为 3。

::: code-group

```vue [App.vue]
<script setup lang="ts">
import { Rect } from 'leafer-ui'
import './proxyData' // 重写 proxyData，全局只需引入一次

const rect = new Rect()

const proxyData = rect.proxyData // 获取 rect 的响应式代理数据

setTimeout(() => {
  proxyData.width = 1 // 修改响应式代理数据, 同步更新页面
}, 1000)

setTimeout(() => {
  rect.width = 2 // 修改rect数据, 同步更新页面
}, 2000)
</script>

<template>
  <div class="rect" @click="rect.width = 3">{{ proxyData.width }}</div>
</template>

<style scoped>
.rect {
  font-size: 200px;
  cursor: pointer;
}
</style>
```

```ts [proxyData.ts]
import { shallowReactive, watch } from 'vue'

import { UI, defineKey } from 'leafer-ui'

// 定义proxyData

defineKey(UI.prototype, 'proxyData', {
  get() {
    return this.__proxyData
      ? this.__proxyData
      : (this.__proxyData = this.createProxyData())
  },
})

// 设置元素属性时，内部同步设置代理数据

UI.prototype.setProxyAttr = function (name: string, newValue: unknown): void {
  const data = this.__proxyData as any
  if (data[name] !== newValue) data[name] = newValue
}

// 获取元素属性时，内部优先返回代理数据

UI.prototype.getProxyAttr = function (name: string): any {
  const value = (this.__proxyData as any)[name]
  return value === undefined ? this.__.__get(name) : value
}

// 创建响应式数据

UI.prototype.createProxyData = function () {
  // 1.获取所有样式数据(含默认值)
  const data = this.__.__getData()

  // 2. 生成响应式数据
  const proxyData = shallowReactive(data)

  // 3.观察响应式数据变化，同步更新元素数据
  for (const name in data) {
    watch(
      () => proxyData[name], // source
      (newValue) => {
        if (this.__.__get(name) !== newValue) (this as any)[name] = newValue
      } // callback
    )
  }

  return proxyData
}
```

:::

## 归属

### [UI 元素](/reference/display/UI.md)
