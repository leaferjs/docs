<script setup>
import Case from '/component/Case.vue'
</script>

# Using in React

:::tip Note
leafer 及元素不能直接挂载到响应式数据上，会造成内部层层代理，拖慢运行速度
:::

::: code-group

```tsx [App.tsx]
import { useEffect } from 'react'
import { Leafer, Rect } from 'leafer-ui'

export default function App() {
  useEffect(() => {
    const leafer = new Leafer({ view: 'leafer-view' })

    const rect = new Rect({
      x: 100,
      y: 100,
      width: 200,
      height: 200,
      fill: '#32cd79',
      cornerRadius: [50, 80, 0, 80],
      draggable: true,
    })

    leafer.add(rect)

    return () => {
      leafer.destroy() // useEffect runs twice in development mode, must destroy properly
    }
  })

  return (
    <div
      id="leafer-view"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    ></div>
  )
}
```

:::

### Make LeaferJS support [reactive data](../../../reference/UI/proxy.md)
