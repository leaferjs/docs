<script setup>
import Case from '/component/Case.vue'
</script>

# 在 Next.js 中使用

:::tip 注意事项
leafer 及元素不能直接挂载到响应式数据上，会造成内部层层代理，拖慢运行速度
:::

::: code-group

```tsx [leafer-view.tsx]
'use client' // 标识为client代码

import { useEffect } from 'react'
import { ILeafer } from '@leafer-ui/interface'

export default function LeaferView() {
  useEffect(() => {
    let leafer: ILeafer
    let isDestroy = false

    import('leafer-ui').then(({ Leafer, Rect }) => {
      // 必须在 useEffect 中异步加载代码，才有 canvas context 环境
      if (isDestroy) return

      leafer = new Leafer({ view: 'leafer-view' })

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
    })

    return () => {
      if (leafer) leafer.destroy() // 开发环境useEffect会执行2次，必须及时销毁
      isDestroy = true
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

```tsx [page.tsx]
import LeaferView from './leafer-view' // 引入client组件

export default function Home() {
  return <LeaferView />
}
```

:::
