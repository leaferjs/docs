<script setup>
import Case from '/component/Case.vue'
</script>

# Graphics Editor

The graphics editor is an interesting example that uses an App-based architecture. It supports moving, scaling, rotating, and skewing, as well as multi-selection, marquee selection, grouping, locking, and layer control. It also supports [configurable styles](../../plugin/in/editor/config/base.md), custom [editing tools](../../plugin/in/editor/EditTool.md), and [inner editors](../../plugin/in/editor/InnerEditor.md).

::: tip Note
You must install the [graphics editor plugin](../../plugin/in/editor/index.md) to use this feature, or install [leafer-editor](../install/editor/start.md) directly (which already includes all related editor plugins).
:::

<case name="Editor" index=2 count=2 x=20></case>

::: code-group

<<< @/code/plugin/editor/frame/editor.ts [editor]

<<< @/code/plugin/editor/frame/origin.ts [implementation principle]

:::

## Congratulations 🎉

You have completed the overview of common scenario plugins. Next, you will learn several important advanced concepts.

## Next Step

### [Create App](../advanced/app.md)

<br/>

### Using in frontend frameworks

[Vue](../framework/vue/index.md)

[React](../framework/react/index.md)

### Using in server-side rendering

[Nuxt.js](../framework/nuxt/index.md)

[VitePress](../framework/vitepress/index.md)

[Next.js](../framework/next/index.md)
