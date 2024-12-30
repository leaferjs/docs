# 局部渲染

应用通过局部渲染来提高画布重绘的效率，当页面中有数万个元素的时候，只更新变化的区域。

变化前和变化后的元素 [渲染边界（包围盒）](/guide/basic/bounds.md) 组成了变化区域。

<br/>

![part-render](/svg/part-render.svg)

<br/>

## 关闭局部渲染

当无法判断元素包围盒，如编辑框、背景网格的 Leafer 层，这个时候可以关闭局部渲染。

::: code-group
<<< @/code/app/config/app/partRender.ts [App]

<<< @/code/app/config/partRender.ts [Leafer]
:::

## 恭喜 🎉

你已完成进阶知识的学习，接下来将带你了解几个重要的 **生命周期**，就算完成入门的学习了。

## 下一步

### [生命周期](/guide/life/ui.md)
