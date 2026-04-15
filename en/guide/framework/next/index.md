<script setup>
import Case from '/component/Case.vue'
</script>

# Using in Next.js

:::tip Note
Leafer and its elements must not be directly bound to reactive data, otherwise multiple layers of proxy wrapping will occur and significantly reduce performance.
:::

::: code-group

```tsx [leafer-view.tsx]
'use client' // mark as client component

import { useEffect } from 'react'
import { ILeafer } from '@leafer-ui/interface'

export default function LeaferView() {
  useEffect(() => {
    let leafer: ILeafer
    let isDestroy = false

    import('leafer-ui').then(({ Leafer, Rect }) => {
      // Must load asynchronously inside useEffect to ensure canvas context environment
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
      if (leafer) leafer.destroy() // useEffect runs twice in development mode, must destroy properly
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
import LeaferView from './leafer-view' // import client component

export default function Home() {
  return <LeaferView />
}
```

:::
