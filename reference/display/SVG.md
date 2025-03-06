<script setup>
import Case from '/component/Case.vue'
</script>

# SVG 元素

## 图片

[Image 元素](/reference/display/Image.md) 和 [图案填充](/reference/UI/paint/image.md) 都支持直接加载 svg 格式的图片。

svg 图片采用了特殊的渲染逻辑，可以实现高清晰缩放.

通过 url 无法识别出 svg 的情况下，可以通过 [图案填充](/reference/UI/paint/image.md) 指定 format 为 svg。

想修改 svg 图片的颜色，可以采用 [这个办法](https://developers.weixin.qq.com/community/develop/article/doc/000606868600b8d5f2ae12d9551813)。

## 路径

[Path](./Path.md) 支持 svg 路径数据

## 格式转换

期待社区出现 svg 转换为图形元素的插件

## 示例

### 使用 url

<<< @/code/display/SVG/svg-url.ts

### 使用 字符串

<<< @/code/display/SVG/svg.ts

图案填充

<<< @/code/display/SVG/svg-rect.ts
