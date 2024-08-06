# JSON

导入导出 JSON 对象 / 字符串。

## 导出

### toJSON ( options?: `IJSONOptions` ): [`IUIInputData`](/api/interfaces/IUIInputData.md)

导出 JSON 对象。

```ts
interface IJSONOptions {
  matrix?: boolean
}
```

<<< @/code/property/json/export.ts

### toString ( options?: `IJSONOptions` ): `string`

导出 json 字符串。

```ts
interface IJSONOptions {
  matrix?: boolean
}
```

## 导入

### 创建方式

<<< @/code/property/json/ui.ts

<<< @/code/property/json/create.ts

<<< @/code/property/json/leafer.ts

### set 方式

<<< @/code/property/json/set.ts

## 归属

### [UI](/reference/display/UI.md#导入导出)
