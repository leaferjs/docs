# JSON

Import and export JSON objects / strings.

::: tip Note

The App element does not currently support direct import/export.

You can export `app.tree` as JSON, then import it via `app.tree.set({ children: json.children })`.

:::

## Export

### toJSON ( options?: `IJSONOptions` ): [`IUIInputData`](../../api/interfaces/IUIInputData.md)

Export a JSON object.

```ts
interface IJSONOptions {
  matrix?: boolean
}
```

<<< @/code/property/json/export.ts

### toString ( options?: `IJSONOptions` ): `string`

Export a JSON string.

```ts
interface IJSONOptions {
  matrix?: boolean
}
```

## Auxiliary Properties

### skipJSON: `boolean`

Whether the child element should be skipped during JSON export.

```ts
rect.skipJSON = true
```

### childlessJSON: `boolean`

Whether to prevent exporting child elements when exporting JSON (usually used for custom elements). Defaults to `false`.

```ts
group.childlessJSON = true
```

## Import

### Creation Method

::: code-group
<<< @/code/property/json/create.ts [Leafer]
<<< @/code/property/json/app/create.ts [App]
:::

::: code-group
<<< @/code/property/json/leafer.ts [Leafer]
<<< @/code/property/json/app/leafer.ts [App]
:::

### set Method

::: code-group
<<< @/code/property/json/set.ts [Leafer]
<<< @/code/property/json/app/set.ts [App]
:::

## Belongs to

### [UI Element](../display/UI.md)
