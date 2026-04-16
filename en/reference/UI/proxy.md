# Reactive Data

Enable elements to support reactive data in frameworks such as Vue / React.

修改元素数据 或 响应式数据，都能得到同步更新。

## Key Property

### proxyData: [`IUIInputData`](../../api/interfaces/IUIInputData.md)

Getter for reactive data used to proxy element data.

:::tip
Note: Accessing `proxyData` will automatically create a reactive data object `__proxyData`. Use it carefully, as it increases memory usage.

```ts
// After deselecting an element, it is recommended to clear proxy data immediately
// otherwise it will keep extra memory and cache outdated data
ui.clearProxyData()
```

:::

## Data Hierarchy

Currently only first-level properties support reactivity. For object or array values, you must replace them with a new object to trigger updates.

```ts
proxyData.fill.rotation = 30 // invalid

proxyData.fill = proxyData.fill // invalid

proxyData.fill = { ...proxyData.fill, rotation: 30 } // valid, new object created
```

## 内部需实现的方法

Vue 3 example provided (`proxyData.ts`). More framework plugins will be added later.

### createProxyData ( ): [`IUIInputData`](../../api/interfaces/IUIInputData.md)

Create reactive data `__proxyData` based on different frameworks (internal use).

### clearProxyData ( ): [`IUIInputData`](../../api/interfaces/IUIInputData.md)

Clear proxy data. After deselecting elements, it is recommended to clear it immediately to avoid memory leaks and stale cache.

### setProxyAttr ( name: `string`, newValue: [`IValue`](../../api/modules.md#ivalue) )

Synchronize proxy data when setting element properties (internal use).

### getProxyAttr ( name: `string` ): [`IValue`](../../api/modules.md#ivalue)

When getting element properties, prioritize returning proxy data (internal use).

## 归属

### [UI Element](../display/UI.md)

## Example

### Reactive data in Vue 3

You can see the value in the UI automatically changes from 100 → 1 → 2, and then becomes 3 after clicking.

::: code-group

```vue [App.vue]
<script setup lang="ts">
import { Rect } from 'leafer-ui'
import './proxyData' // override proxyData, only needs to be imported once globally

const rect = new Rect()

const proxyData = rect.proxyData // get reactive proxy data

setTimeout(() => {
  proxyData.width = 1 // update reactive proxy data, UI updates automatically
}, 1000)

setTimeout(() => {
  rect.width = 2 // update element data, UI updates automatically
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

// define proxyData

defineKey(UI.prototype, 'proxyData', {
  get() {
    return this.__proxyData
      ? this.__proxyData
      : (this.__proxyData = this.createProxyData())
  },
})

// sync proxy data when setting element properties

UI.prototype.setProxyAttr = function (name: string, newValue: unknown): void {
  const data = this.__proxyData as any
  if (data[name] !== newValue) data[name] = newValue
}

// prioritize proxy data when getting element properties

UI.prototype.getProxyAttr = function (name: string): any {
  const value = (this.__proxyData as any)[name]
  return value === undefined ? this.__.__get(name) : value
}

// create reactive data

UI.prototype.createProxyData = function () {
  // 1. get all style data (including defaults)
  const data = this.__.__getData()

  // 2. create reactive data
  const proxyData = shallowReactive(data)

  // 3. watch changes and sync back to element
  for (const name in data) {
    watch(
      () => proxyData[name],
      (newValue) => {
        if (this.__.__get(name) !== newValue) (this as any)[name] = newValue
      },
    )
  }

  return proxyData
}

// clear reactive data

UI.prototype.clearProxyData = function () {
  if (this.__proxyData) delete this.__proxyData
}
```

:::
