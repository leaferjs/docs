# 跨平台核心包

## @leafer-ui/core

通过引入 `@leafer-ui/draw`（跨平台绘制核心包，不包含交互功能）、`@leafer-ui/core`（跨平台核心包，继承 draw，包含交互功能）、`@leafer-ui/interface`（接口） 作为外部依赖，可[开发跨平台插件](/plugin/dev.md)、产品功能。

`leafer-ui` 等平台包基于 `@leafer-ui/core` 核心包组装平台差异化功能。

[![leaferjs](/svg/leaferjs.svg?d=013007)](/guide/index.md#使命与愿景)

## 底层渲染可插拔

核心逻辑与渲染实现解耦，底层未来可适配 WebGL、WebGPU、Skia，以及不同的平台。

通过替换渲染相关的子包 `@leafer/renderer`、`@leafer/canvas`、`@leafer/image`、`@leafer-ui/web`，在自定义平台包中重新组合，可以适配不同的渲染器、平台。
