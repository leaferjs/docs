# Debug Mode

Debug mode can be enabled to observe the internal state of the engine.

```ts
import { Debug } from 'leafer-ui'

Debug.enable = true
```

## Custom Log Output

Print specific types of information

```ts
Debug.filter = 'RunTime' // or ['RunTime', 'Life']
```

Exclude specific types of information

```ts
Debug.exclude = 'Life' // or ['RunTime', 'Life']
```

## Show Repaint Area

```ts
Debug.showRepaint = true
```

## Show Element Bounds

Show element bounding box wireframes

```ts
Debug.showBounds = true
```

Show hit area (interactive area)

```ts
Debug.showBounds = 'hit'
```

## Custom Types

Custom type logs can be controlled via `Debug.filter` and `Debug.exclude` to determine whether they are printed to the console.

<<< @/code/basic/debug/custom.ts

## Key Properties

### enable: `boolean`

Enable debug mode.

### showWarn: `boolean`

Whether to print warning messages. Default is true.

### filter: `string` | `string[]`

Print only specified types of information.

### exclude: `string` | `string[]`

Exclude specified types of information.

### showRepaint: `boolean`

Show repaint regions.

### showBounds: `boolean` | `'hit'`

Show element bounding boxes. Set to `hit` to display collision areas.

## API

### [Debug](../../api/classes/Debug.md)
