<script setup>
import Case from '/component/Case.vue'
</script>

# Exporting Elements

Export elements as images or JSON.

::: tip Notes
You need to install the [export element plugin](../../plugin/in/export/index.md) to use this feature, or install [leafer-editor](../install/editor/start.md) or the Node.js version (which already includes the export plugin).
:::

### Export Element as Image

<<< @/code/property/export/file.ts

### Export High-Resolution Image

<<< @/code/property/export/pixelRatio.ts

### Export Base64 Encoded Data

<<< @/code/property/export/string.ts

### Synchronous Export of Base64 Encoded Data

<<< @/code/property/syncExport/string.ts

### Export Binary Data

<<< @/code/property/export/blob.ts

### Export with Watermark

<<< @/code/property/export/onCanvas.ts

### Export Entire Canvas

Export a screenshot of the current engine canvas.

<<< @/code/property/export/screenshot.ts

### Export JSON

<<< @/code/property/json/export.ts

## Understanding Element Export Methods

| Name                                                                          | Description                                                                                                                                                                        |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Path                                                                          |                                                                                                                                                                                    |
| [getPath()](../../reference/UI/getPath.md)                                    | Get the element's numeric path (Canvas [drawing commands](../../reference/interface/ui/PathData.md#canvas-命令))                                                                   |
| [getPathString()](../../reference/UI/getPathString.md)                        | Get the element's string path (Canvas [drawing commands](../../reference/interface/ui/PathData.md#canvas-命令), including non-SVG drawing commands)                                |
| Export                                                                        |                                                                                                                                                                                    |
| [export()](../../reference/UI/export.md)                                      | Asynchronous export of element as image, JSON, or canvas; supports screenshots and slicing, can download; requires installing the [export plugin](../../plugin/in/export/index.md) |
| [syncExport()](../../reference/UI/export.md#syncexport)                       | Synchronous export of element as image, JSON, or canvas; supports screenshots and slicing, can download; requires installing the [export plugin](../../plugin/in/export/index.md)  |
| [toJSON()](../../reference/UI/json.md)                                        | Export JSON object                                                                                                                                                                 |
| [toString()](../../reference/UI/json.md#tostring-options-ijsonoptions-string) | Export JSON string                                                                                                                                                                 |

## Congratulations 🎉

You have completed the basics. Next, let’s explore some **fun plugins** to relax a bit ~

## Next Step

### [Animation Features](../plugin/animate.md)

<br/>

### Using in Frontend Environments

[Vue](../framework/vue/index.md)

[React](../framework/react/index.md)

### Using in Server-Side Rendering

[Nuxt.js](../framework/nuxt/index.md)

[VitePress](../framework/vitepress/index.md)

[Next.js](../framework/next/index.md)

### Component-based Development (Community)

[leafer-vue](https:// leafer-vue.netlify.app/)
